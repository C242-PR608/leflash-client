<template>
  <div v-if="isVisible" class="popup" @click="buttonTrigger">
    <div class="popup-content">
      <div class="header">
        <span>Warning</span>
      </div>
      <div class="line"></div>
      <div class="message">
        <slot />
      </div>
      <div class="line"></div>
      <div class="footer">
        <button class="popup-close" @click="buttonTrigger">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    buttonTrigger() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  height: 350px;
  width: 40vw;

  display: flex;
  flex-direction: column;

  border-radius: 12px;

  background: #fff;
  padding: 24px;
}

.line {
  height: 2px;
  background: #ddd;
  width: 100%;
}

.header {
  display: flex;
  flex-direction: row;

  margin-bottom: 6px;
}

.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
}

.footer {
  display: flex;
  flex-direction: row-reverse;
}

.footer button {
  margin-top: 6px;
  margin-bottom: 0px;
}
</style>
