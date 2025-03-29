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
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 Minden jog fenntartva | <RouterLink to="/privacy-policy" class="footer-link">Adatvédelmi tájékoztató</RouterLink></p>
      <p>A weboldal sütiket használ a jobb felhasználói élmény érdekében.</p>
    </div>
  </footer>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/* Fejléc modernizálása */
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
