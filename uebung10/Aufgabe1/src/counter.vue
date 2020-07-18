<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
<template>
    <div>
      <h1> Counter:{{count}} </h1>
      <button v-on:click= "increment" > You clicked me to increment {{this.count}} times</button>
      <button v-on:click= "decrement"> You clicked me to decrement </button>
      <button v-on:click= "reset"> You clicked me to reset</button>
    </div>
</template>
<script>
      export default { 
          data(){
        return{
            count:0
        }
    },
        methods:{
            increment () {
    
              this.count +=1;
          },
          decrement(){
          if(this.count>0){
           this.count-=1;

          }
          },
          reset(){

              this.count=0
          }

          }
      }
 
new Vue({
     el: '#app',
     data: {

     }   

});

</script>