<template>
  <div id="app">
    <Navbar v-if="$route.meta.showNavbar" />
    <Sidebar v-if="$route.meta.showSidebar" />
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
  height: 45px;
  background-color: rgb(0, 51, 204, 0.8);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  outline: 0;
  padding: 12px;
  margin-block: 24px;
}
</style>
