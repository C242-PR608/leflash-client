<template>
  <div class="card-set">
    <div class="card-body">
      <div>
        <p class="card-qty">{{ qty }}</p>
        <div class="line"></div>
        <p class="card-title">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qty: { type: String, required: true },
    title: { type: String, required: true },
  },
};
</script>

<style scoped>
.card-set {
  border-radius: 16px;
  width: 100%;
  box-shadow: 3px 5px 14px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.card-body {
  display: flex;
  flex-direction: column;
  background-color: #fffcfc;
  flex-grow: 1;
  padding: 24px;
}

.card-title {
  color: #000000;
  font-size: 30px;
  margin: 0px;
  padding: 0px;
}
.card-qty {
  margin: 0px;
  font-size: 20px;
  color: #000000;
}

.line {
  height: 2px;
  margin-block: 10px;
  background: #ddd;
  width: 100%;
}
</style>
