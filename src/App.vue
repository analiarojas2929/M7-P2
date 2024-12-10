<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">Contador</router-link> |
      <router-link to="/parent" class="nav-link">Parent-Child</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
}

.nav-link:hover {
  color: #42b983;
}

.nav-link.router-link-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>