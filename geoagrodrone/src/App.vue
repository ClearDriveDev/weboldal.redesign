<script setup>
import { onMounted  } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

onMounted(() => {
  
})
</script>

<template>
  <header>
    <h5 class="text-center">Készüljünk együtt a következő szezonra!</h5>
    <img src="/images/szantofold.jpg" alt="Szántóföld" class="headerBg">
    <h1>{{ headerText }}</h1>
    <div class="container">
      <nav class="routerlink text-center">
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/">Főoldal</RouterLink>
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/about">Rólunk</RouterLink>
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/references">Referenciák</RouterLink>
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/services">Szolgáltatások</RouterLink>
        <RouterLink class="btn btn-outline-info btn-dark m-2" to="/contact">Elérhetőségek</RouterLink>
      </nav>
  </div>
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
header {
  background-size: auto;
  background-position: center center;
  background-repeat: repeat;
}

.headerBg{
  height: 250px;
  width: 100%;
  opacity: 0.9;
}

h1{
  color: white;
  font-size: 20px;
}

h5{
  height: 50px;
  padding: 13px;
  background-color: rgb(255, 221, 110);
}
</style>
