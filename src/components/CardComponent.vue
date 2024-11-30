<template>
  <div class="card">
    <div class="card-body">
      <div>
        <h2 class="card-title">{{ num }}</h2>
        <p class="card-text">{{ desc }}</p>
      </div>
      <div class="card-icon">
        <i :class="icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: { type: String, required: true },
    desc: { type: String, required: true },
    icon: { type: String, required: true },
  },
};
</script>

<style scoped>
.card {
  border-radius: 16px;
  min-width: 272px;
  box-shadow: 3px 5px 14px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.card-body {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fffcfc;
  flex-grow: 1;
  padding: 48px 24px;
}

.card-title {
  text-align: center;
  color: #000000;
  font-size: 48px;
  margin: 0px 0px 0px 0px;
  padding: 12px 12px 0 12px;
}
.card-text {
  text-align: center;
  line-height: 1;
  margin: 0px 0px 0px 0px;
  font-size: 17px;
  color: #000000;
}
.card-icon {
  display: flex;
  align-items: center;

  margin: 0px 0px 0px 0px;
}
</style>
