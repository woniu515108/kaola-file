<template>
  <div id="app">
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
  // @ is an alias to /src
  import Tabbar from '@/components/Tabbar.vue'
  
  export default {
    name: 'Home',
    components: {
      Tabbar
    }
  }
  </script>