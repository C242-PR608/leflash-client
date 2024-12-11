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
        view
        v-for="set in sets"
        :key="set._id"
        :id="set._id"
        :qty="set.cards.length"
        :title="set.topic"
        v-on:remove-set="removeSet($event)"
      />
    </div>
  </main>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import { sidebarWidth } from '../components/sidebar/state';
import CardSet from '@/components/CardSet.vue';
import axios from 'axios';
// import { flashcardSets } from '@/dataSeed';

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
      user_id: this.$store.state.user._id,
      sets: [],
    };
  },
  // computed: {
  //   mySets() {
  //     return this.sets.filter((set) => set.author_id === this.user_id);
  //   },
  // },
  methods: {
    async removeSet(set) {
      await axios.delete(`http://localhost:8000/api/sets/${set}`);

      let indexSet = this.sets
        .map(function (set) {
          return set._id;
        })
        .indexOf(set);
      this.sets.splice(indexSet, 1);
    },
  },
  async created() {
    const userId = this.$store.state.user._id;

    const result = await axios.get(
      'http://localhost:8000/api/sets/user',
      userId
    );
    this.sets = result.data;
  },
};
</script>

<style scoped>
.overview {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
