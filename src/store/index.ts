import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    users: [] as { email: string }[],
    isLoading: false,
    isAuthorization: false, 
  },
  mutations: {
    setUser(state, users) {
      state.users = users;
    },  
    setAuthorization(state, isAuthorization) {
      state.isAuthorization = isAuthorization;
    },
    REMOVE_USER(state, user) {
      const index = state.users.findIndex(el => el.email === user.email);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
      
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      await axios
        .get('https://randomuser.me/api/?results=5')
        .then(response => {
          console.log(response.data.results);
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
    removeUser({ commit }, user) {
      commit('REMOVE_USER', user); // Вызываем мутацию для удаления пользователя
    }
    
  },
  
  getters: {
    getUsers: state => state.users,

  },
  modules: {
   
  }
})
