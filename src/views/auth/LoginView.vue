<template>
  <section class="auth-section">
    <div class="form-container">
      <img src="../../assets/img/logo.jpg" alt="" />
      <p class="title">Welcome back</p>
      <form class="form" @submit.prevent="login">
        <div class="input-group">
          <div class="input">
            <label for="email" class="input-label">Email</label>
            <input
              id="email"
              type="email"
              class="input-field"
              placeholder="example@email.com"
              v-model="email"
              required
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
          <!-- <p class="page-link">
          <span class="page-link-label">Forgot Password?</span>
        </p> -->
        </div>
        <button class="form-btn">Log in</button>
      </form>
      <p class="action-label">
        Don't have an account?<router-link :to="{ name: 'register' }"
          ><span class="action-link">Sign up</span></router-link
        >
      </p>
    </div>
    <Popup ref="Popup">
      <p>
        Gagal melakukan proses autentikasi. Mohon mengisi email dan password
        dengan benar
      </p>
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
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
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
