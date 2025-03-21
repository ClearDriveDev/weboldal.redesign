<script setup>
import { onMounted  } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

onMounted(() => {
  
})
</script>

<template>
  <header>
    <div class="container">
      <nav class="text-center">
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/">HomeView</RouterLink>
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/services">Szolgáltatások</RouterLink>
      </nav>
  </div>
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>

</style>
