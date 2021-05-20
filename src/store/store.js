import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        allData: [],
        singleRoute: {},
        imageGallery: [],
        users: []
    },
    getters: {
        allData(state) {
            return state.allData;
        },
        singleRoute(state) {
          return state.singleRoute
        },
        imageGallery(state) {
          return state.imageGallery
        },
        users(state) {
          return state.users
      }  
    },
    actions: {
        saveData({commit}) {
            return axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    commit('saveData', response.data)
                    return response
            })
        },
        singleData({commit},payload) {
            return axios.get('https://jsonplaceholder.typicode.com/posts/' + payload)
                .then(response => {
                    commit('singleData', response.data)
                    return response
            })
        },
        saveImage({ commit }) {
            return axios.get('https://jsonplaceholder.typicode.com/photos')
                .then(response => {
                commit('saveImage',response.data)
            })
        },
        usersData({commit}) {
            return axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    console.log(response);
                    commit('usersData', response.data)
                    return response
            })
        }
    },
    mutations: {
        saveData(state, data) {
            state.allData = data
        },
        singleData(state, data) {
            state.singleRoute = data
        },
        saveImage(state, data) {
            state.imageGallery = data
        },
        usersData(state, data) {
            state.users = data
        }
    }
})