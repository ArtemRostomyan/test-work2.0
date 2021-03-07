export default {
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
            }
         }
         if(other_array.length){
            data3 = [ {name: 'number', value : number_array} , {name: 'string', value : string_array} , {name: 'other', value : other_array} ]
         } else{
            data3 = [ {name: 'number', value : number_array} , {name: 'string', value : string_array}]
         }
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
      state.historyArrays = []
   },
   UPDATE_HISTORY_ARRAYS(state, value){
      let new_history_page = []
      if(state.historyArrays.length == 10){
         state.historyArrays.shift()
         new_history_page.push(...value)
      } else{
         new_history_page.push(...value)
      }
      state.historyArrays.push(new_history_page)
   },
   UPDATE_VALUE_TEXT(state, value){
      state.value_text = value
   },
   REMOVE_LAST(state){
      if(state.historyArrays.length > 1){
         state.historyArrays.pop()
         state.value = state.historyArrays[state.historyArrays.length-1]
      } else{
         state.historyArrays = []
         state.value =  []
      }
      
   },
   ERROR_FETCH(state){
      state.error_fetch = !state.error_fetch
   }
}