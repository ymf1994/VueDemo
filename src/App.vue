<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to='/with'>with</router-link> |
      <router-link to='/with/goWhere'>go</router-link> 
    </div>
    <router-view/>
    <!-- <div>
      <h2>你不为赚钱而努力，那就得为省钱而烦恼</h2>
    </div> -->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
