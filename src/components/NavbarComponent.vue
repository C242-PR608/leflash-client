<template>
  <header class="navbar">
    <div class="logo">
      <router-link :to="{ name: 'login' }" id="logo-link">
        <h1>LeFlash</h1></router-link
      >
    </div>
    <div class="profile">
      <div class="profile-pic">
        <img src="../assets/img/profile-pic.jpg" alt="profile" />
      </div>
      <div class="bell-icon">
        <i class="far fa-bell fa-lg"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  width: 100%;
  padding: 1rem 4rem;
  margin-inline: auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 9999;
  border-bottom: 1px solid #ddd;
  background-color: white;
  height: 75px;
}

.profile {
  width: 90%;
  gap: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.profile-pic {
  display: flex;
  flex-direction: column;
}

.profile-pic img {
  widows: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 2px;
  border-color: grey;
  object-fit: cover;
}

.bell-icon {
  display: flex;
  flex-direction: column;
  color: gray;
}

#logo-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  text-decoration: none;
}
#logo-link h1 {
  margin: 0;
}
</style>
