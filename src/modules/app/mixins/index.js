import { LAYOUT_DEFAULT } from '../constant/layout.constant';

const appMixins = {
  computed: {
    layout() {
      let pageLayout = LAYOUT_DEFAULT;
      if (this.$route && this.$route.meta && this.$route.meta.layout) {
        pageLayout = this.$route.meta.layout;
      }

      return `${pageLayout}-layout`;
    },
  },
  methods: {
    handleLogout() {
      try {
        this.$store.dispatch('auth/auth_HANDLE_LOGOUT');
        this.$router.replace('/login');
      } catch (error) {
        this.$store.dispatch('errorHandler/errorHandler_postMessage', error);
      }
    },
  },
};

export default appMixins;
