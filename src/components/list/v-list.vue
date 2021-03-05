<template>
  <div id="v-list">
    <span v-for="(item, index) in value" :key="index"> {{item}} </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  name: "v-list",
  data(){
    return{}
  },
  methods:{
  },
  computed: {
    ...mapGetters([
      'VALUE'
    ]),
    value(){
      let last_array = []
      function updateValue(array){
        if(array.length){
          for(let i = 0 ; i < array.length; i++){
            if(Array.isArray(array[i].value)){
              updateValue(array[i].value)
            } else{
              let x = array[i]
              last_array.push(x.toString())
            }
          }
          
          return last_array
        } else{
          return ''
        }
      }
      return updateValue(this.VALUE)
    }
  }
}
</script>

<style >
#v-list{
  max-width: 100%;
  margin: 95px 0 0 0;
}
</style>
