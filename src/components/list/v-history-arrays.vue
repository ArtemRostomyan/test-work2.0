<template>
    <div 
      id="v-history-arrays"
      class="history-box">
      <button
        class="history-box__button"
        @click="updateValue(item_data)">{{index}}</button>
    </div>
</template>

<script>

export default{
  name: "v-history-arrays",
  props: {
    item_data: {
      type: Array,
      default() {
        return []
      }
    },
    index: {
      type: Number,
      default(){
        return 0
      }
    }
  },
  
  data(){
    return{}
  },
  methods:{
    
    updateValue(value){
      this.$emit('updateValue', value)
      
    }
  }
}
</script>

<style lang="scss">
.history-box{
  margin: 0 4px;
  &__button{
    background-color: rgb(6, 141, 231);
    color: #fff;
    padding: 5px;
    border: none;
    border-radius: 5px;
    animation: button-animate 0.3s 1 ease forwards;
  }
}
@keyframes button-animate {
  0%{
    margin-top: -20px;
  }
  100%{
    margin-top: 0px;
  }
}
</style>
