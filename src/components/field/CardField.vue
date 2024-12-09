<template>
  <div class="container">
    <div>
      <div class="header">
        <span>Card {{ index + 1 }}</span>
        <div v-if="length > 3">
          <i
            class="fas fa-trash fa-sm"
            style="color: grey"
            @click="$emit('remove', index)"
          ></i>
        </div>
        <div v-else>
          <i class="fas fa-trash fa-sm" style="color: #ddd"></i>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="input">
      <input
        type="text"
        class="input-field"
        placeholder="Term"
        v-model="termValue"
      />
      <input
        type="text"
        class="input-field"
        placeholder="Definition"
        v-model="definitionValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    term: String,
    definition: String,
    index: Number,
    length: Number,
  },
  data() {
    return {
      termValue: this.term,
      definitionValue: this.definition,
    };
  },
  watch: {
    termValue(newValue) {
      this.$emit('update:term', newValue);
    },
    definitionValue(newValue) {
      this.$emit('update:definition', newValue);
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

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 12px;
}

.line {
  height: 2px;
  margin-block: 10px;
  background: #ddd;
  width: 100%;
}

.input {
  display: flex;
  gap: 24px;
  flex-flow: column;
}

.input-field {
  border-radius: 6px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
}

input:focus::placeholder {
  color: transparent;
}
</style>
