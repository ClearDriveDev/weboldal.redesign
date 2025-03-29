<template>
  <div class="container">
    <section class="hero">
      <div class="content animate-fade-in">
        <h1 class="title">Forradalmi drónfelvételek a precíziós mezőgazdaságban</h1>
        <p class="subtitle">Gyorsabb döntések, nagyobb hozam, kevesebb ráfordítás.</p>
        <button class="cta">Fedezd fel</button>
      </div>
    </section>
    
    <section class="services animate-slide-up">
      <h2>Szolgáltatásaink</h2>
      <div class="service-grid">
        <div class="service-card">
          <h3>🌍 Drónos térképezés</h3>
          <p>Részletes és pontos légifelvételek az optimális gazdálkodásért.</p>
        </div>
        <div class="service-card">
          <h3>🌿 NDVI elemzés</h3>
          <p>Átfogó növényzetanalízis a jobb terméshozam érdekében.</p>
        </div>
        <div class="service-card">
          <h3>🔥 Hőkamerás vizsgálat</h3>
          <p>Rejtett problémák feltárása és öntözési rendszerek optimalizálása.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(90deg, rgba(0, 150, 136, 0.8), rgba(0, 188, 212, 0.8));
  color: white;
  padding: 20px;
}

.content {
  animation: fadeIn 1.2s ease-in-out;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
}

.subtitle {
  font-size: 2rem;
  margin-top: 10px;
}

.cta {
  margin-top: 40px;
  padding: 20px 40px;
  font-size: 1.8rem;
  border: none;
  border-radius: 50px;
  background: white;
  color: #009688;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.cta:hover {
  transform: scale(1.1);
}

.services {
  flex: 1;
  padding: 100px 20px;
  text-align: center;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.service-card {
  padding: 30px;
  background: #f8f8f8;
  border-radius: 15px;
  font-size: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.service-card:hover {
  transform: translateY(-10px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>