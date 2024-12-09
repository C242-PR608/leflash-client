import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout(state) {
      state.user = null;
      state.token = '';
      localStorage.removeItem('token');
    },
  },
  actions: {
    async register({ commit }, { username, email, password }) {
      const register = await axios.post('http://localhost:8000/api/auth/register', { username, email, password });
      if (register) {
        const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
        const { token } = response.data;
        commit('setToken', token);
        // Fetch user info after login
        const userResponse = await axios.get('http://localhost:8000/api/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        commit('setUser', userResponse.data);
      }
    },

    async login({ commit }, { email, password }) {
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
      const { token } = response.data;
      commit('setToken', token);
      // Fetch user info after login
      const userResponse = await axios.get('http://localhost:8000/api/user', {
        headers: { Authorization: `Bearer ${token}` }
      });
      commit('setUser', userResponse.data);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    user(state) {
      return state.user;
    },
  },
});