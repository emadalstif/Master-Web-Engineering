<template>
  <header>
     
      <button><a class="active" href="#homev">Homev</a></button>
      <button><a href="#newsv">newsv</a></button>
      <button><a href="#contactv">contactv</a></button>
      <button><a href="#aboutv">aboutv</a></button>
      
  </header>
</template>

<script>
export default {
  name: 'Menuv',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
      flex-direction:column;
      height: auto;
      width: 99%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
           }
</style>
