<template>
  <main :style="{ 'margin-left': sidebarWidth }">
    <div class="overview">
      <CardComponent num="40" desc="CARDS" icon="fas fa-archive fa-3x" />
      <CardComponent
        num="2300"
        desc="TOTAL XP"
        icon="fas fa-certificate fa-3x"
      />
      <CardComponent num="365" desc="DAYS STREAK" icon="fas fa-star fa-3x" />
    </div>
    <div class="set-header">
      <h2>My Flashcard Set</h2>
      <button><i class="fas fa-plus"></i> Create New Set</button>
    </div>
    <div class="card-set">
      <CardSet qty="20 cards" title="JavaScript Syntax" />
      <CardSet qty="17 cards" title="Back-end Technology" />
      <CardSet qty="8 cards" title="Google Cloud CLI command" />
    </div>
  </main>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import { sidebarWidth } from '../components/sidebar/state';
import CardSet from '@/components/CardSet.vue';
export default {
  components: {
    CardComponent,
    CardSet,
  },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style scoped>
.overview {
  display: flex;
  flex-direction: row;
  gap: 48px;
  margin-block-end: 5em;
}

.set-header {
  display: flex;
  justify-content: space-between;
}

.card-set {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}
</style>
