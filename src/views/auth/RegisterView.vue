<template>
  <section class="auth-section">
    <div class="form-container">
      <form class="form" @submit.prevent="register">
        <div class="input-group">
          <div class="input">
            <label for="username" class="input-label">Username</label>
            <input
              id="username"
              type="text"
              class="input-field"
              placeholder="username"
              v-model="username"
              required
            />
          </div>
          <div class="input">
            <label for="email" class="input-label">Email</label>
            <input
              id="email"
              type="email"
              class="input-field"
              placeholder="example@email.com"
              required
              v-model="email"
            />
          </div>
          <div class="input">
            <label for="password" class="input-label">Password</label>
            <input
              id="password"
              type="password"
              class="input-field"
              placeholder="6-12 characters"
              v-model="password"
              required
            />
          </div>
        </div>
        <button class="form-btn">Sign Up</button>
      </form>
      <p class="action-label">
        Already have an account?<router-link :to="{ name: 'login' }"
          ><span class="action-link">Log in</span></router-link
        >
      </p>
    </div>
    <Popup ref="Popup">
      <p>Gagal melakukan proses register. Email sudah terdaftar</p>
    </Popup>
  </section>
</template>

<script>
import Popup from '@/components/PopupComponent.vue';

export default {
  components: {
    Popup,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$router.push('/');
      } catch (error) {
        this.$refs.Popup.buttonTrigger();
      }
    },
  },
};
</script>

<style scoped src="../../assets/css/auth.css"></style>
