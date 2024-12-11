<template>
  <main :style="{ 'margin-left': sidebarWidth }">
    <h3>Daily Review</h3>
    <div class="review">
      <CardComponent num="Git Command" desc="5 cards" />
      <CardComponent num="Programming Basic" desc="5 cards" />
      <CardComponent num="JavaScript Basic" desc="5 cards" />
    </div>
    <h3>Learning Progress</h3>
    <div class="progress">
      <CardSet
        progress
        title="Git Command"
        completed="10"
        total="12"
        ref="progress"
      />
      <CardSet
        progress
        title="Programming Basic"
        completed="2"
        total="5"
        ref="progress"
      />
      <CardSet
        progress
        title="JavaScript Basic"
        completed="3"
        total="8"
        ref="progress"
      />
    </div>
  </main>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import { sidebarWidth } from '../components/sidebar/state';
import CardSet from '@/components/CardSet.vue';

export default {
  setup() {
    return { sidebarWidth };
  },
  components: {
    CardComponent,
    CardSet,
  },
  mounted() {
    this.$refs.progress.updateProgress();
  },
};
</script>

<style scoped>
.review {
  display: flex;
  flex-direction: row;
  gap: 48px;
  margin-block-end: 5em;
}

.progress {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}
</style>
