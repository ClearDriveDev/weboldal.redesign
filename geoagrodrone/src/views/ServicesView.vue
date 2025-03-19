<template>
    <h1 class="text-center">Szolgáltatások</h1>
    <form class="card w-50 mx-auto">
        <img src="https://lh6.googleusercontent.com/qvD4W7RG5jpYBHIQU6f101lyMzL_m_D66y3YyLWvtjc1XjHTDQkLdwdqGCtU_EKMX9nDW2AHE1PMpsk6H2zLvfVPYR4fc2NZHaDO1OtkTSnRLdw1zg68VB4D3z1Rx3vi0w=w1280" alt="Kép a növényekről">
        <p class="felirat m-0">Növényállapot felmérés</p>
        <p class="felirat m-0">stressztérkép, NDVI térkép</p>
        <input class="btn btn-outline-dark btn-info" type="submit" @click="redirectToPlantStatePriceView" value="Árak">
    </form>

    <form class="card w-50 mx-auto">
        <img src="https://lh4.googleusercontent.com/-qlaxGtkmtaoDe95RBqrXZSi4uUOfAz1yY36E8OuyiDbPvx5ArXiT8KQhJ3cgVXyDmaKPpM5szrzlah_OUyPyzUFhmXfdGm0vh25lw3YwISAxIt2_9R19KKRhSkBNwyD4A=w1280" alt="Kép a növények káráról">
        <p class="felirat m-0">Kárfelmérés</p>
        <p class="felirat m-0">pl.: vadkár, belvíz</p>
        <input class="btn btn-outline-dark btn-info" type="submit" @click="redirectToDamageAssessmentPriceView" value="Árak">
    </form>
</template>

<script setup>
    import {ref} from 'vue'
/*export default {
  methods: {
    redirectToPlantStatePriceView() {
      this.$router.push({ name: 'plantStatePriceView' });
    }
  }
}*/
/*export default {
  methods: {
    redirectToDamageAssessmentPriceView() {
      this.$router.push({ name: 'damageAssessmentPriceView' });
    }
  }
}*/
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