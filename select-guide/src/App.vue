<template>
  <div id="app">
    <div id="nav">
      <div id="a">
        <router-link to="/eng"
          ><img src="./assets/great-britain-48.png"
        /></router-link>
        <router-link to="/ita"><img id="it" src="./assets/italy-48.png"/></router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
      display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: fixed;
  top: 0;
  left: 50px;
  width: 100%;
  text-align: center;
  height: 64px;
  padding: 0 36px 0 16px;
  /* background-color: rgba(255, 0, 0, 0.2); */
  z-index: 1002;
}


#nav a.router-link-exact-active {
  border: 1px solid #021a40;
  background-color: #f37021;
  border-radius: 5px;
}

img{
    height: 40px;
}

@media screen and (max-width: 768px) {
  #nav {
    text-align: right;
 
  }
  #a{
     margin-right: 50px;

  }
}
</style>
