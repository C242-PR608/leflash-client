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
      <h3>My Flashcard Set</h3>
      <router-link :to="{ name: 'create' }">
        <button>
          <i class="fas fa-plus fa-xs"></i> Create New Set
        </button></router-link
      >
    </div>
    <div class="card-set">
      <CardSet
        v-for="set in mySets"
        :key="set.id"
        :id="set.id"
        :qty="set.cards.length"
        :title="set.topic"
      />
    </div>
  </main>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import { sidebarWidth } from '../components/sidebar/state';
import CardSet from '@/components/CardSet.vue';
import { flashcardSets } from '@/dataSeed';
export default {
  components: {
    CardComponent,
    CardSet,
  },
  setup() {
    return { sidebarWidth };
  },
  data() {
    return {
      user_id: 'uid-1',
      sets: flashcardSets,
    };
  },
  computed: {
    mySets() {
      return this.sets.filter((set) => set.author_id === this.user_id);
    },
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
