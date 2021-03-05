export default {
   GET_PRODUCTS_FROM_GITHUB({commit}){
      return fetch('https://raw.githubusercontent.com/WilliamRu/TestAPI/master/db.json')
      .then((response) => {
         return response.json();
      })
      .then((data) => {
         commit('SET_DATA_FOR_STATE', data)
      })
    },
    UPDATE_VALUE_ACTION({ commit }, value) {
      commit('UPDATE_VALUE_ACTION', value)
    },
    CLEAR_VALUE({commit}){
       commit('CLEAR_VALUE')
    },
    UPDATE_HISTORY_ARRAYS({commit}, value){
      commit('UPDATE_HISTORY_ARRAYS', value)
    },
    UPDATE_VALUE_TEXT({commit}, value){
       commit('UPDATE_VALUE_TEXT', value)
    },
    REMOVE_LAST({commit}){
       commit('REMOVE_LAST')
    }
}