<template>
  <div class="container">
    <div class="input">
      <label for="topic" class="input-label">Topic</label>
      <input
        type="text"
        id="topic"
        class="input-field"
        placeholder="Insert a new topic"
        v-model="topicValue"
        required
      />
    </div>
    <div class="input">
      <label for="desc" class="input-label">Description</label>
      <textarea
        id="desc"
        rows="3"
        class="input-field"
        placeholder="Add description"
        v-model="descriptionValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topic: String,
    description: String,
  },
  data() {
    return {
      topicValue: this.topic,
      descriptionValue: this.description,
    };
  },
  watch: {
    topicValue(newValue) {
      this.$emit('update:topic', newValue);
    },
    descriptionValue(newValue) {
      this.$emit('update:description', newValue);
    },
  },
};
</script>

<style scoped>
.container {
  border-radius: 12px;
  width: 100%;
  box-shadow: 3px 5px 14px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  background-color: #fffcfc;
  gap: 32px;
  flex-grow: 1;
  padding: 24px;
}

.input {
  display: flex;
  gap: 6px;
  flex-flow: column;
}

.input-label {
  text-align: start;
  margin: 0;
  font-size: 18px;
  color: black;
}

.input-field {
  border-radius: 6px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
}

textarea:focus::placeholder,
input:focus::placeholder {
  color: transparent;
}
</style>
