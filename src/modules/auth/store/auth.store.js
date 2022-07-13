/* eslint-disable no-shadow */
const namespaced = true;

const state = {
  auth_title: '',
  auth_loading: false,
};

const getters = {
  auth_title: (state) => state.auth_title,
  auth_loading: (state) => state.auth_loading,
};

const mutations = {
  auth_SET_TITLE: (state, payload) => {
    state.auth_title = payload;
  },
  auth_SET_LOADING: (state, payload) => {
    state.auth_loading = payload;
  },
};

const actions = {
  /**
   * @description Get Description
   *
   * @method Place your method here
   * @url place your api endpoint here
   * @access public
   *
   * @return {any}
   */
  async auth_HANDLE_LOGIN({ commit }, payload) {
    commit('auth_SET_LOADING', true);
    try {
      const { email, password } = payload;
      const response = await this.$api.post(
        '/users/login',
        JSON.stringify({
          email,
          password,
        }),
      );

      if (response.status !== 200) throw Error('akun tidak terdaftar');

      localStorage.setItem('token', response.data.data.token);
      return true;
    } catch (error) {
      return false;
    } finally {
      commit('auth_SET_LOADING', false);
    }
  },

  async auth_HANDLE_REGISTER({ commit }, payload) {
    commit('auth_SET_LOADING', true);
    const { name, email, password } = payload;
    try {
      const response = await this.$api.post(
        '/users/register',
        JSON.stringify({
          name,
          email,
          password,
        }),
      );

      if (response.status !== 201) throw Error('akun sudah terdaftar');

      return true;
    } catch (error) {
      return false;
    } finally {
      commit('auth_SET_LOADING', false);
    }
  },

  async auth_HANDLE_LOGOUT() {
    try {
      localStorage.removeItem('token');

      return Promise.resolve;
    } catch (error) {
      return Promise.reject;
    }
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
