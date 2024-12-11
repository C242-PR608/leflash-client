<template>
  <div class="card-set">
    <div class="card-body">
      <div>
        <div class="header" v-if="view">
          <p class="card-qty">{{ qty }} cards</p>
          <div class="btn-group">
            <router-link :to="{ name: 'edit', params: { id: id } }">
              <i class="fas fa-edit fa-sm"></i>
            </router-link>
            <i class="fas fa-trash fa-sm" @click="$emit('remove-set', id)"></i>
          </div>
        </div>
        <div class="line" v-if="view"></div>
        <p class="card-title">{{ title }}</p>
      </div>
      <div class="progress-container" v-if="progress">
        <div class="progress-bar" id="progress"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String },
    qty: { type: Number },
    title: { type: String },
    view: { type: Boolean },
    progress: { type: Boolean },
    completed: { type: Number },
    total: { type: Number },
  },
  data() {
    return {
      done: this.completed,
      full: this.total,
    };
  },
  methods: {
    updateProgress() {
      let percentage = (this.done / this.full) * 100; // Hitung persentase progress
      let progressBar = document.getElementById('progress');

      // Update lebar progress bar
      progressBar.style.width = percentage + '%';
    },
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
  color: rgb(0, 51, 204, 0.3);
}

.progress-container {
  margin-block: 8px;
  width: 100%;
  height: 15px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background-color: #4caf50;
  transition: width 0.5s ease;
}
</style>
