<template>
  <div id="app">
   <Menuh/>
   <Menuv/> 
  </div> 
</template>

<script>
    import Menuv from './components/Menuv.vue';
    import Menuh from './components/Menuh.vue';
    export default {
      name: 'app',
      components: {
        Menuv,
        Menuh
      }
    }
</script>

<style>


</style>
