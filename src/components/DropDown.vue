<template>
  <transition name="dropdown" appear>
    <div class="sub-menu" v-if="isOpen">
      <div class="user-detail">
        <span class="name">{{ user.username }}</span>
        <span class="email">{{ user.email }}</span>
      </div>
      <div class="line"></div>
      <div v-for="(item, index) in items" :key="index">
        <router-link :to="item.link">
          <div class="menu-item">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.sub-menu {
  width: 250px;
  height: max-content;
  position: absolute;
  top: 85%;
  right: 110px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.2);
}

.user-detail {
  display: flex;
  flex-direction: column;

  margin-inline: 6px;
  padding-inline: 10px;
  padding-block-start: 8px;
}

.user-detail .name {
  font-size: 18px;
}
.user-detail .email {
  font-size: 14px;
}

.line {
  height: 2px;
  background: #ddd;
  width: 100%;
}

.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  width: 95%;
  margin-inline: 6px;
  padding-inline: 10px;
  padding-block: 16px;
  color: grey;
}

.menu-item:hover {
  color: black;
}

a {
  text-decoration: none;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-out;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}
</style>
