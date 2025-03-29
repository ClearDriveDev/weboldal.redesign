<template>
  <header class="header">
    <h5 class="text-center">Készüljünk együtt a következő szezonra!</h5>
    <div class="header-bg">
      <h1>{{ headerText }}</h1>
      <nav class="nav-links">
        <RouterLink class="nav-btn" to="/">Főoldal</RouterLink>
        <RouterLink class="nav-btn" to="/about">Rólunk</RouterLink>
        <RouterLink class="nav-btn" to="/references">Referenciák</RouterLink>
        <RouterLink class="nav-btn" to="/services">Szolgáltatások</RouterLink>
        <RouterLink class="nav-btn" to="/contact">Elérhetőségek</RouterLink>
      </nav>
    </div>

    <div class="menu-icon" @click="toggleMenu">
      &#9776;
    </div>

    <div v-if="isMenuOpen" class="dropdown-menu">
      <RouterLink class="dropdown-item" to="/" @click="toggleMenu">Főoldal</RouterLink>
      <RouterLink class="dropdown-item" to="/about" @click="toggleMenu">Rólunk</RouterLink>
      <RouterLink class="dropdown-item" to="/references" @click="toggleMenu">Referenciák</RouterLink>
      <RouterLink class="dropdown-item" to="/services" @click="toggleMenu">Szolgáltatások</RouterLink>
      <RouterLink class="dropdown-item" to="/contact" @click="toggleMenu">Elérhetőségek</RouterLink>
    </div>
  </header>
  
  <main>
    <RouterView />
  </main>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 Minden jog fenntartva | Adatvédelmi tájékoztató</p>
      <p>A weboldal sütiket használ a jobb felhasználói élmény érdekében.</p>
    </div>
  </footer>

</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.menu-icon {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 12px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

.menu-icon:hover {
  background: rgba(255, 255, 255, 0.3);
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.dropdown-item {
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  transition: 0.3s;
}

.dropdown-item:hover {
  background: #f1f1f1;
}

.header {
  position: relative;
  width: 100%;
  height: 300px;
  background: url('/images/szantofold.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.header-bg {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-btn {
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  text-decoration: none;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

body {
  background: #f8f9fa;
}

main {
  padding: 20px;
}

.footer {
  background: #343a40;
  color: white;
  text-align: center;
  padding: 15px 20px;
  font-size: 14px;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-link {
  color: #17a2b8;
  text-decoration: none;
  font-weight: bold;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
