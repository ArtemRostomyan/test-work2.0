export default {
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
   GET_HISTORY_ARRAYS(states){
      return states.historyArrays
   },
   GET_VALUE_TEXT(states){
      return states.value_text
   }
}