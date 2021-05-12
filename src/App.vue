<template>
  <div id="app">
      <nav>
        <router-link class="navbar__link" :to="{name:'home'}">Home</router-link>
        <router-link class="navbar__link"  :to="{name:'login'}">Login</router-link>
        <router-link class="navbar__link"  :to="{name:'register'}">Resgister</router-link>
        <router-link class="navbar__link"  :to="{name:'student'}">Student</router-link>
      </nav>
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;    
}
.navbar__link {
        display: inline-block;
        padding: 0px 5px;
        text-decoration: none;
        color: black;
    } 
</style>
