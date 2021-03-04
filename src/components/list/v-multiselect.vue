<template>
  <div id="v-multiselect">
    <div>
      <multiselect 
        @input="UPDATE_VALUE_ACTION"
        :value="VALUE" 
        :options="options" 
        :multiple="true" 
        label="name"
        track-by="name"
        :close-on-select="false" 
        :clear-on-select="false" 
        :preserve-search="true" 
        placeholder="Категории"  
        :preselect-first="false">
        <template 
          slot="selection" 
          slot-scope="{ values,  isOpen }">
          <span 
            class="multiselect__single" 
            v-if="values.length &amp;&amp; !isOpen">Выбрано: {{ values.length }} </span>
        </template>
      </multiselect>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Multiselect from 'vue-multiselect'

export default{
  name: "v-multiselect",
  components: {
    Multiselect
  },
  data(){
    return{
    }
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_GITHUB',
      'UPDATE_VALUE_ACTION'
    ])
  },
  computed: {
    ...mapGetters([
      'GET_SERVER',
      'VALUE'
    ]),
    options(){
      return this.GET_SERVER
    }
    
    
  },
  mounted(){
    this.GET_PRODUCTS_FROM_GITHUB()
  }
}
</script>

<style lang="scss">
#v-multiselect{
  margin-top: 30px;
}
</style>
