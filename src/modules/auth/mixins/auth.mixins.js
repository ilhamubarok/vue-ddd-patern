import { mapGetters, mapMutations } from 'vuex';

import { LAYOUT_DEFAULT } from '@/modules/app/constant/layout.constant';

const authMixin = {
  data: () => ({
    emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    passwordRules: [(v) => !!v || 'Password is required'],
  }),
  computed: {
    ...mapGetters({
      auth_title: 'auth/auth_title',
      auth_loading: 'auth/auth_loading',
    }),
    layout() {
      let pageLayout = LAYOUT_DEFAULT;
      if (this.$route && this.$route.meta && this.$route.meta.layout) {
        pageLayout = this.$route.meta.layout;
      }

      return `${pageLayout}-layout`;
    },
  },
  methods: {
    ...mapMutations({ setTitle: 'auth/auth_SET_TITLE' }),
  },
  mounted() {
    this.setTitle(this.$route.meta.title);
  },
};
export default authMixin;
