import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    users: [],
    isLoading: false,
    isAuthorization: false, 
  },
  mutations: {
    setUser(state, users) {
      state.users = users;
    },  
    setAuthorization(state, isAuthorization) {
      state.isAuthorization = isAuthorization;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      await axios
        .get('https://randomuser.me/api/?results=5')
        .then(response => {
          commit('setUser', response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    },
    async loadMore({ commit, state }) {
      await axios
        .get('https://randomuser.me/api/?results=1')
        .then(response => {
            commit('setUser', [...state.users, ...response.data.results])
        })
        .catch(error => {
            console.error(error);
        });
        console.log('state.users', state.users);
    },
    updateVariableAuthorization({ commit }, newValue) {
      commit('setAuthorization', newValue);
    },
  },
  
  getters: {
    getUsers: state => state.users,
  },
  modules: {
   
  }
})
