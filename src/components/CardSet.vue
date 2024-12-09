<template>
  <div class="card-set">
    <div class="card-body">
      <div>
        <div class="header">
          <p class="card-qty">{{ qty }} cards</p>
          <div class="btn-group">
            <router-link :to="{ name: 'edit', params: { id: id } }">
              <i class="fas fa-edit fa-sm"></i>
            </router-link>
            <i class="fas fa-trash fa-sm"></i>
          </div>
        </div>
        <div class="line"></div>
        <p class="card-title">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    qty: { type: Number, required: true },
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

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 12px;
}

.btn-group {
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-title {
  color: #000000;
  font-size: 24px;
  margin: 0px;
  padding: 0px;
}
.card-qty {
  margin: 0px;
  font-size: 16px;
  color: #000000;
}

.line {
  height: 2px;
  margin-block: 10px;
  background: #ddd;
  width: 100%;
}

i {
  color: #ddd;
}
</style>
