<template>
  <h1 class="text-center">Szolgáltatások</h1>
  <div class="containerS">
    <div class="row justify-content-center align-items-center">
      <div class="card col-12 col-md-4 col-lg-3 mb-4">
        <img src="/images/PlantScience.jpg" alt="Kép a növényekről" title="Kép a növényekről" class="card-img-top">
        <div class="card-body">
          <p class="felirat1 m-0 text-center">Növényállapot felmérés</p>
          <p class="felirat2 m-0 text-center">stressztérkép, NDVI térkép</p>
          <router-link to="/plantStatePrice" title="Árak" class="btn btnS btn-outline-dark btn-info">
            Árak
          </router-link>
        </div>
      </div>

      <div class="card col-12 col-md-4 col-lg-3 mb-4">
        <img src="/images/PlantDamage.jpg" alt="Kép a növények káráról" title="Kép a növények káráról" class="card-img-top">
        <div class="card-body">
          <p class="felirat1 m-0 text-center">Kárfelmérés</p>
          <p class="felirat2 m-0 text-center">pl.: vadkár, belvíz</p>
          <router-link to="/damageAssessmentPrice" title="Árak" class="btn btnS btn-outline-dark btn-info">
            Árak
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import {ref} from 'vue'
</script>

<style scoped>
h1{
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 20px;
  color: black;
}

.containerS {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.card{
  border: 3px solid black;
  margin: 10px;
  background-color: crimson;
  color: white;
  padding: 10px;
  width: 450px;
}

.felirat1{
  font-weight: bolder;
  font-size: 25px;
}

.felirat2{
  font-weight: normal;
  font-size: 20px;
}

.btnS{
  width: 200px;
  display: flex;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}
</style>