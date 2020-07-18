<template>
 <div>
      <header>
            <span>WWW-Navigator</span>
            <div id="headerMenu">
             <button><router-link to ="/">Html</router-link></button>     
             <button><router-link to ="/css">Css</router-link></button>
             <button><router-link to ="/js">Js</router-link></button>
             <button><router-link to ="/others">Others</router-link></button>
            </div>
        </header>
   
           
 </div>

</template>

<script>
  

    export default {
        name: 'Header',
       
    }
</script>
<style >
     
           button{
                background-color: gray;
                color: black;
                font-weight: bold;
                border-radius: 10px;
                border-width: 3px;
                width: 100px;
                margin: 10px;
                 text-align: center;
            }
          header{
                display: flex;
                flex-direction: column;
                height: auto;
                background-color: brown;
                position: fixed;
                width: 99%;
                text-align: center;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
            }

</style>