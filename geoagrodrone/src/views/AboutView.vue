<template>
  <div class="about-container">
    <section class="about-intro">
      <h1 class="about-title">Rólunk</h1>
      <p class="about-description">
        A Geoagrodrone célja, hogy forradalmasítsa a mezőgazdaságot drónos légi felvételekkel. 
        Az innovatív dróntechnológiák segítségével a gazdálkodók pontosabb döntéseket hozhatnak, 
        és így növelhetik a hozamot, csökkenthetik a költségeket és javíthatják a fenntarthatóságot.
      </p>
    </section>

    <section class="our-mission">
      <h2>Missziónk</h2>
      <p>
        A precíziós mezőgazdaságban való fejlődés érdekében a legmodernebb drónos eszközöket és szoftvereket használjuk 
        a pontos térképezés, növényzet-elemzés és állapotfelmérés érdekében. Célunk, hogy minden gazdálkodó számára elérhetővé 
        váljanak a legújabb technológiák, melyek segítenek a hatékonyabb termelésben.
      </p>
    </section>

    <section class="team">
      <h2>Csapatunk</h2>
      <div class="team-members">
        <div class="team-member">
          <div class="team-photo"></div>
          <h3>Dr. Kovács László</h3>
          <p>Alapító és ügyvezető</p>
        </div>
        <div class="team-member">
          <div class="team-photo"></div>
          <h3>Szabó Anna</h3>
          <p>Technikai vezető</p>
        </div>
        <div class="team-member">
          <div class="team-photo"></div>
          <h3>Nagy Péter</h3>
          <p>Fejlesztő mérnök</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>

<style scoped>
.about-container {
  padding: 50px 20px;
  background: #f4f4f4;
}

.about-intro {
  text-align: center;
  background: #009688;
  padding: 50px;
  border-radius: 8px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-description {
  font-size: 1.6rem;
  margin-top: 20px;
  line-height: 1.8;
}

.our-mission {
  margin-top: 60px;
  text-align: center;
}

.our-mission h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.our-mission p {
  font-size: 1.5rem;
  margin-top: 20px;
  line-height: 1.8;
  color: #555;
}

.team {
  margin-top: 60px;
  text-align: center;
}

.team h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.team-member {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.team-member:hover {
  transform: translateY(-10px);
}

.team-photo {
  width: 120px;
  height: 120px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 auto 20px;
}

.team-member h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

.team-member p {
  margin-top: 10px;
  font-size: 1.4rem;
  color: #777;
}
</style>
