<template>
  <div id="app">
    <Header/>
    <div id="main">
    <Nav class="nav"/>
    <Main class="article"/>
    <Aside class="aside"/>
    </div>
    <Footer/>
  </div>
    
  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
import Aside from './components/Aside.vue'
export default {
 name: "app",
  components: {
    Header,
   Nav,
   Main,
   Aside,
   Footer
   }
}



</script>

<style>

 #main{
                display: flex;
                flex-direction: row;
                align-content: center;
                text-align: center;           
                font-size: 20px;
                padding-top: 65px;
                padding-bottom: 2px;
                height: 1000px;
                width: 100%;
                padding-right: 0px;
            }


 .article{
 
   width: 60%;
       
 }
.nav{
    width:40%;
    background-color: sandybrown;
            }            

.aside{
       width: 40%;
       background-color: sandybrown;

      }
      
</style>
