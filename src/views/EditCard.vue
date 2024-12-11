<template>
  <main>
    <Popup ref="Popup">
      <h2>Gagal melakukan proses update</h2>
    </Popup>
    <h2>Edit Flashcard Set</h2>
    <form action="" method="put" class="form" @submit.prevent="updateSet">
      <TopicField
        v-if="set.topic"
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
        <div class="btn-action">
          <router-link :to="{ name: 'home' }">
            <button type="reset">Cancel</button>
          </router-link>
          <button type="submit">Done</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import CardField from '@/components/field/CardField.vue';
import TopicField from '@/components/field/TopicField.vue';
import Popup from '@/components/PopupComponent.vue';
import axios from 'axios';

export default {
  components: {
    TopicField,
    CardField,
    Popup,
  },
  data() {
    return {
      set: {},
    };
  },
  async created() {
    const userId = this.$store.state.user._id;
    const result = await axios.get(
      'http://localhost:8000/api/sets/user',
      userId
    );
    this.set = result.data.find((set) => {
      return set._id === this.$route.params.id;
    });
  },
  methods: {
    async updateSet() {
      try {
        const id = this.set._id;
        await axios.put(`http://localhost:8000/api/sets/${id}`, this.set);
        this.$router.push('/');
      } catch (error) {
        this.$refs.Popup.buttonTrigger();
      }
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
  max-width: 200px;
  min-width: 120px;
}

.btn-action {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}
</style>
