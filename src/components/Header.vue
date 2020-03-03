<template>
  <div class="headerStyle">
    <nav>
          <h1>{{ title }}</h1>
          <ul>
             <li><router-link to="/" exact>List</router-link></li>
             <li><router-link to="/add" exact>Buy Item</router-link></li>
          </ul>
        </nav>
    
  </div>
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'router attempt!!!'
        }
  },
  props:{
    title:{
      type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(6, 74, 126);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory
}

nav{
    background: rgb(6, 74, 126);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: ivory;
    color: #444;
}
ul{
    list-style-type: none;
    text-align: left;
    margin: 0;
}
li{
    
    display: inline-block;
    margin: 0 10px;
}
li a{
  
  font-size: 18px;
  color:ivory;
    
}
</style>