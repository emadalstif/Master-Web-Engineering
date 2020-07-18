<template>
 <div>
     
      <footer>
                <span id="footerTitle">Footer:</span>
                <span class="footerLinks">Sitemap</span>
                <span class="footerLinks">Home</span>
                <span class="footerLinks">News</span>
                <span class="footerLinks">Contact</span>
                <span class="footerLinks">About</span>
     </footer>
           
 </div>

</template>

<script>
  

    export default {
        name: 'Footer',
       
    }
</script>
<style >
     
           footer{
                display: block;
                position: fixed;
                background-color: black;
                color: white;
                height: 35px;
                width: 100%;
                bottom: 0px;
                text-align: center;
                border: 2px;
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;
            }
            #footerTitle{
                font-size: 23px;
            }
            .footerLinks{
                font-size: 12px;
                text-decoration: underline;
                padding: 1%;
            }

</style>