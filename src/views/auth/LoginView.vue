<template>
  <section class="auth-section">
    <div class="form-container">
      <p class="title">Welcome back</p>
      <form action="/" class="form">
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
        <p class="page-link">
          <span class="page-link-label">Forgot Password?</span>
        </p>
        <button class="form-btn">Log in</button>
      </form>
      <p class="action-label">
        Don't have an account?<router-link :to="{ name: 'register' }"
          ><span class="action-link">Sign up</span></router-link
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped src="../../assets/css/auth.css"></style>
