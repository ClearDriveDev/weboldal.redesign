<template>
    <h1 class="text-center">Elérhetőségeink</h1>
    <div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-6 mb-4">
            <div class="card">
                <img src="/images/phonecall.jpg" alt="Telefon beszélgetés" title="Telefon beszélgetés" class="card-img-top">
            </div>
        </div>

        <div class="col-12 col-md-6 mb-4">
            <div class="card">
                <div class="card-body">
                    <p class="felirat1 m-0 text-center">Elérhetőségek</p>
                    <p class="felirat2 m-0 text-center">Kovácsházi Ádám telefon: 123-456-789</p>
                    <p class="felirat2 m-0 text-center">Surányi István telefon: 987-654-321</p>
                    <p class="felirat2 m-0 text-center">Krisztin Benedek László telefon: 555-123-456</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
  
<script setup>

</script>
  
<style scoped>
h1{
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 20px;
  color: black;
}

.containerS {
    margin-top: 20px;
}

.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
    padding: 15px;
}

.felirat1 {
    font-size: 25px;
    font-weight: bold;
}

.felirat2 {
    font-size: 17px;
    color: #4f575e;
}
</style>