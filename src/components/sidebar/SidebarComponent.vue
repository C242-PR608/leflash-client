<template>
  <aside class="sidebar" :style="{ width: sidebarWidth }">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left"></i>
    </span>

    <div>
      <SidebarLink to="/" icon="fas fa-home fa">Home</SidebarLink>
      <SidebarLink to="/learning" icon="fas fa-columns ">Learning</SidebarLink>
      <SidebarLink to="/statistic" icon="fas fa-chart-bar "
        >Statistic</SidebarLink
      >
    </div>
  </aside>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state';
import SidebarLink from './SidebarLink.vue';
export default {
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: rgb(0, 51, 204, 0.7);
  --sidebar-item-hover: rgb(161, 183, 248);
  --sidebar-item-active: rgb(0, 51, 204);
}
</style>

<style scoped>
.sidebar {
  color: black;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 75px;
  left: 0;
  bottom: 0;
  padding: 0.5rem;

  transition: 0.1s ease;

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.collapse-icon {
  display: flex;
  justify-content: end;
  padding: 0.75em;

  color: rgb(255, 255, 255, 0.7);

  transition: 0.01s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.01s linear;
}
</style>
