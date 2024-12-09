<template>
  <main>
    <h2>Create New Flashcard Set</h2>
    <form action="" method="post" class="form">
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
            @update:term="updateTopic(index, $event)"
            @update:definition="updateDescription(index, $event)"
            :length="cards.length"
          />
        </div>
        <button type="button" class="btn-add" @click="addCard">
          <i class="fas fa-plus"></i> Add Card
        </button>
        <div class="btn-action">
          <router-link :to="{ name: 'home' }">
            <button type="reset">Cancel</button>
          </router-link>
          <button type="button" @click="showPopup">Done</button>
        </div>
      </div>
    </form>
    <Popup ref="Popup">
      <p>Apakah anda yakin?</p>
    </Popup>
  </main>
</template>

<script>
import CardField from '@/components/field/CardField.vue';
import TopicField from '@/components/field/TopicField.vue';
import Popup from '@/components/PopupComponent.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    TopicField,
    CardField,
    Popup,
  },
  data() {
    return {
      topic: '',
      description: '',
      cards: new Array(3).fill(null).map(() => ({
        id: uuidv4(),
        term: '',
        definition: '',
      })),
    };
  },
  methods: {
    addCard() {
      this.cards.push({
        id: uuidv4(),
        term: '',
        definition: '',
      });
    },
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
  max-width: 150px;
  min-width: 90px;

  margin: 0px;
}

.btn-action {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}
</style>
