<template>
  <main>
    <Popup ref="Popup">
      <h2>My Popup</h2>
    </Popup>
    <h2>Edit Flashcard Set</h2>
    <form action="" method="put" class="form">
      <TopicField
        :topic="topic"
        :description="description"
        @update:topic="updateTopic($event)"
        @update:description="updateDescription($event)"
      />
      <div class="card-field">
        <div v-for="(card, index) in cards" :key="card.id">
          <CardField
            :term="card.term"
            :definition="card.definition"
            :index="index"
            @remove="removeCard"
            @update:term="updateTerm(index, $event)"
            @update:definition="updateDefinition(index, $event)"
            :length="cards.length"
          />
        </div>
        <div class="btn-action">
          <router-link :to="{ name: 'home' }">
            <button type="reset">Cancel</button>
          </router-link>
          <button type="button" @click="showPopup">Done</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import CardField from '@/components/field/CardField.vue';
import TopicField from '@/components/field/TopicField.vue';
import Popup from '@/components/PopupComponent.vue';
import { flashcardSets } from '@/dataSeed';

export default {
  components: {
    TopicField,
    CardField,
    Popup,
  },
  data() {
    const set = flashcardSets.find((set) => {
      return set.id === this.$route.params.id;
    });
    return {
      topic: set.topic,
      description: set.description,
      cards: set.cards,
    };
  },
  methods: {
    removeCard(index) {
      this.cards.splice(index, 1);
    },
    updateTerm(index, newTerm) {
      this.cards[index].term = newTerm;
    },
    updateDefinition(index, newDefinition) {
      this.cards[index].definition = newDefinition;
    },
    updateTopic(newTopic) {
      this.topic = newTopic;
    },
    updateDescription(newDescription) {
      this.description = newDescription;
    },
    showPopup() {
      this.$refs.Popup.buttonTrigger();
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 4em;
  margin-bottom: 15px;
}

.card-field {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

button {
  max-width: 200px;
  min-width: 120px;
}

.btn-action {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}
</style>
