<template>
  <main :style="{ 'margin-left': sidebarWidth }">
    <h1>Learning page</h1>
  </main>
</template>

<script>
import { sidebarWidth } from '../components/sidebar/state';
export default {
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style></style>
