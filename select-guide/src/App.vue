<template>
  <div id="app">
    <div id="nav">
      <div id="a">
        <router-link to="/eng"><img class="flag-icon" src="./assets/great-britain-48.png"/></router-link>
        <router-link to="/ita"><img class="flag-icon" src="./assets/italy-48.png"/></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  left: 50%;
    top: 1.5%;

  position: absolute;
  z-index: 1001;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  position: relative;
  left: -50%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.flag-icon{
    height: 4.5vh;
}

@media screen and (max-width: 768px) {
  #nav {
    top: 1.5%;
    left: 75%;
    position: absolute;
    z-index: 1001;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    position: relative;
    left: -50%;
  }
}
</style>
