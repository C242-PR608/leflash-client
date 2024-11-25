<template>
  <section class="auth-section">
    <div class="form-container">
      <form class="form">
        <div class="input">
          <label for="username" class="input-label">Username</label>
          <input
            id="username"
            type="text"
            class="input-field"
            placeholder="unique username"
          />
        </div>
        <div class="input">
          <label for="email" class="input-label">Email</label>
          <input
            id="email"
            type="email"
            class="input-field"
            placeholder="example@email.com"
          />
        </div>
        <div class="input">
          <label for="password" class="input-label">Password</label>
          <input
            id="password"
            type="password"
            class="input-field"
            placeholder="6-12 characters"
          />
        </div>
        <button class="form-btn">Sign Up</button>
      </form>
      <p class="action-label">
        Already have an account?<router-link :to="{ name: 'login' }"
          ><span class="action-link">Log in</span></router-link
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped src="../../assets/css/auth.css"></style>
