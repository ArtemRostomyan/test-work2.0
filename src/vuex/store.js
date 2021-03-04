import vuex from 'vuex'
import Vue from 'vue'


Vue.use(vuex)

let store = new vuex.Store({
   state: {
      data: [],
      value: [],
      historyArrays: []
   },
   mutations: {
      SET_DATA_FOR_STATE: (state, data) => {
         state.data = data.testArr
         let data2 = []
         let data3 = []
         function mitigate(array) {
            for(let i = 0; i < array.length; i++){
               if(typeof array[i] !== 'object' || Array.isArray(array[i])){
                  if(Array.isArray(array[i])){
                     mitigate(array[i])
                  } else{
                     data2.push(array[i])
                  }
               }
            }
         }
         function underArray(array){
            let number_array = []
            let string_array = []
            let other_array = []
            for(let i = 0; i < array.length; i++){
               if(typeof array[i] == 'number'){
                  number_array.push(array[i])
               } else if(typeof array[i] == 'string'){
                  string_array.push(array[i])
               } else {
                  other_array.push(array[i])
                  console.log(array[i], 'other')
               }
            }
            if(other_array.length){
               data3 = [ {name: 'number', value : number_array} , {name: 'string', value : string_array} , {name: 'other', value : other_array} ]
            } else{
               data3 = [ {name: 'number', value : number_array} , {name: 'string', value : string_array}]
            }
            console.log(data3)
         }
         mitigate(state.data)
         state.data = data2
         underArray(state.data)
         state.data = data3
      },
      UPDATE_VALUE_ACTION (state, value) {
         state.value = value
      },
      CLEAR_VALUE (state) {
         state.value = []
      }
   },
   actions: {
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
       }
   },
   getters: {
      GET_SERVER(states){
         return states.data
      },
      VALUE(states){
         if(states.value.length){
            return states.value
         } else{
            return ''
         }
      },
   }
});

export default store