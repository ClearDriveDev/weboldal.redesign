<template>
  <h1 class="text-center">Szolgáltatások</h1>
  <div class="row">
    <div class="card col-12 col-md-4 col-lg-3 mb-4">
      <img src="/images/PlantScience.jpg" alt="Kép a növényekről" class="card-img-top">
      <div class="card-body">
        <p class="felirat m-0">Növényállapot felmérés</p>
        <p class="felirat m-0">stressztérkép, NDVI térkép</p>
        <input class="btn btn-outline-dark btn-info" type="submit" @click="" value="Árak">
      </div>
    </div>
  
    <div class="card col-12 col-md-4 col-lg-3 mb-4">
      <img src="/images/PlantDamage.jpg" alt="Kép a növények káráról" class="card-img-top">
      <div class="card-body">
        <p class="felirat m-0">Kárfelmérés</p>
        <p class="felirat m-0">pl.: vadkár, belvíz</p>
        <input class="btn btn-outline-dark btn-info" type="submit" @click="" value="Árak">
      </div>
    </div>
  </div>
</template>

<script setup>
    import {ref} from 'vue'
</script>

<style>
h1{
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 20px;
  color: black;
}

.card{
  border: 3px solid black;
  margin: 10px;
  background-color: crimson;
  color: white;
  padding: 10px;
}

.felirat{
  font-weight: bolder;
  font-size: 20px;
}

.btn{
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}
</style>