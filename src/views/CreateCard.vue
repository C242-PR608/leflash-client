<template>
  <main>
    <h2>Create New Flashcard Set</h2>
    <form action="" method="post" class="form" @submit.prevent="addSet">
      <TopicField
        :topic="set.topic"
        :description="set.description"
        @update:topic="updateTopic($event)"
        @update:description="updateDescription($event)"
      />
      <div class="card-field">
        <div v-for="(card, index) in set.cards" :key="card._id">
          <CardField
            :term="card.term"
            :definition="card.definition"
            :index="index"
            @remove="removeCard"
            @update:term="updateTerm(index, $event)"
            @update:definition="updateDefinition(index, $event)"
            :length="set.cards.length"
          />
        </div>
        <button type="button" class="btn-add" @click="addCard">
          <i class="fas fa-plus"></i> Add Card
        </button>
        <div class="btn-action">
          <router-link :to="{ name: 'home' }">
            <button type="reset">Cancel</button>
          </router-link>
          <button type="submit">Done</button>
        </div>
      </div>
      <span>{{ set }}</span>
    </form>
    <Popup ref="Popup">
      <p>Terjadi kesalahan saat mengirim data</p>
    </Popup>
  </main>
</template>

<script>
import CardField from '@/components/field/CardField.vue';
import TopicField from '@/components/field/TopicField.vue';
import Popup from '@/components/PopupComponent.vue';
import axios from 'axios';

const { nanoid } = require('nanoid');

export default {
  components: {
    TopicField,
    CardField,
    Popup,
  },
  data() {
    return {
      set: {
        _id: nanoid(10),
        topic: '',
        description: '',
        author_id: this.$store.state.user._id,
        cards: new Array(3).fill(null).map(() => ({
          _id: nanoid(10),
          term: '',
          definition: '',
        })),
      },
    };
  },
  methods: {
    async addSet() {
      try {
        await axios.post('http://localhost:8000/api/sets', this.set);
        this.$router.push('/');
      } catch (error) {
        this.$refs.Popup.buttonTrigger();
      }
    },
    addCard() {
      this.set.cards.push({
        _id: nanoid(10),
        term: '',
        definition: '',
      });
    },
    removeCard(index) {
      this.set.cards.splice(index, 1);
    },
    updateTerm(index, newTerm) {
      this.set.cards[index].term = newTerm;
    },
    updateDefinition(index, newDefinition) {
      this.set.cards[index].definition = newDefinition;
    },
    updateTopic(newTopic) {
      this.set.topic = newTopic;
    },
    updateDescription(newDescription) {
      this.set.description = newDescription;
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
