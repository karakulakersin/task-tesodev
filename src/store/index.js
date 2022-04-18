import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {
        allData: [],
        searchData: []
    },
    getters : {
        getAllData: state => state.allData,
        getSearchData: state => state.searchData

    },
    mutations: {
        setAllData(state,payload) {
            state.allData=payload
        },
        setSearchData(state,payload){
            state.searchData=payload
        },
        addAllData(state,payload) {
            state.allData.push(payload)
        }
    },
    actions: {
        setAllData({commit},payload) {
            commit("setAllData",payload)
        },
        setSearchData({commit},payload){
            commit("setSearchData",payload)
        },
        addAllData({commit},payload){
            commit("addAllData",payload)
        }
    },
  
})
export default store;