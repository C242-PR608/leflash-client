<template>
  <div id="app">
    <Navbar v-if="$route.meta.showNavigation" />
    <Sidebar v-if="$route.meta.showNavigation" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue';
import Sidebar from './components/sidebar/SidebarComponent.vue';
export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;

  display: flex;
  flex-direction: column;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  padding: 2em;
  margin-top: 75px;
}

button {
  height: 50px;
  background-color: grey;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: 0;
  padding: 16px;
  margin-block: 24px;
}
</style>
