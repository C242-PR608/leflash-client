<template>
  <div class="card">
    <div class="card-body">
      <div style="align-content: center">
        <h2 class="card-title">{{ num }}</h2>
        <p class="card-text">{{ desc }}</p>
      </div>
      <div class="card-icon" v-if="icon">
        <i :class="icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: { type: String },
    desc: { type: String, required: true },
    icon: { type: String },
  },
};
</script>

<style scoped>
.card {
  border-radius: 16px;
  min-width: 272px;
  min-height: 100px;
  box-shadow: 3px 5px 14px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.card-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fffcfc;
  flex-grow: 1;
  padding: 24px 24px;
}

.card-title {
  color: grey;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
}
.card-text {
  line-height: 1;
  font-size: 17px;
  color: grey;
  padding: 0px;
  margin: 0px;
}
.card-icon {
  display: flex;
  align-items: center;
  color: rgb(0, 51, 204, 0.3);

  margin: 0px 0px 0px 0px;
}
</style>
