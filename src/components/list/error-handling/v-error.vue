<template>
  <div id="v-error">
    <h2>{{error_text}}</h2>
  </div>
</template>

<script>
export default{
  name: "v-error",
  data(){
    return{
      error_text: 'Произошла ошибка'
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
#v-error{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgb(255, 0, 0);
  background-color: rgb(236, 216, 216);
  color: rgba(0, 0, 0, 0.74);
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  padding: 15px 10px;
}
</style>
