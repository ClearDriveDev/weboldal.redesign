<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <nav class="text-center">
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/">HomeView</RouterLink>
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/services">Szolgáltatások</RouterLink>
      </nav>
    <RouterView />
  </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
