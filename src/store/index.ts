import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    users: [],
    isLoading: false,
    isAuthorization: false, 
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },  
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    setAuthorization(state, isAuthorization) {
      state.isAuthorization = isAuthorization;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      commit('SET_LOADING', true);
      await axios
        .get('https://randomuser.me/api/?results=5')
        .then(response => {
          commit('SET_USERS', response.data.results);
          commit('SET_LOADING', false);
        })
        .catch(error => {
          console.error(error);
          commit('SET_LOADING', false);
        });
    },
    async loadMore({ commit, state }) {
      commit('SET_LOADING', true);
      await axios
        .get('https://randomuser.me/api/?results=1')
        .then(response => {
            commit('SET_USERS', [...state.users, ...response.data.results])
            commit('SET_LOADING', false);
        })
        .catch(error => {
            console.error(error);
            commit('SET_LOADING', false);
        });
    },
    updateVariableAuthorization({ commit }, newValue) {
      commit('setAuthorization', newValue);
    },
  },
  
  getters: {
    getUsers: state => state.users,
    isLoading: state => state.isLoading,
  },
  modules: {
   
  }
})
