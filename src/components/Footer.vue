<template>
  <div class="headerStyle">
    <footer>
        <p v-html="copyRtSymbol"></p>
                
    </footer>
    
  </div>
</template>

<script>
export default {
  
  data(){
    return{
        
        copyRtSymbol:'some router attempt by humans'
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    background:rgb(6, 74, 126);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
    
}
p{
    align-content: center;
    color:ivory;
}
</style>