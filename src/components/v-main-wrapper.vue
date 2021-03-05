<template>
  <div id="v-main-wrapper">
    <vMultiSelect/>
    <vList/>
    <vClearButton
      class="clear-box"/>
  </div>
</template>

<script>
import vMultiSelect from './list/v-multiselect'
import vList from './list/v-list'
import vClearButton from './list/v-clear-button'

export default{
  name: "v-main-wrapper",
  components: {
    vMultiSelect,
    vList,
    vClearButton
  },
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style lang="scss">
.clear-box{
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;  
}
</style>
