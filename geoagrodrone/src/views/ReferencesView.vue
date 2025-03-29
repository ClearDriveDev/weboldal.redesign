<template>
  <h1 class="text-center">Referenciák</h1>
  <div class="carousel-container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      navigation
      pagination
      loop
    >
      <swiper-slide v-for="(item, index) in references" :key="index">
        <div class="carousel-item">
          <img :src="item.image" :alt="item.title" class="carousel-image" />
          <p class="carousel-text">{{ item.title }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const modules = [Navigation, Pagination];

const references = [
  { image: '/images/PlantDamage.jpg', },
  { image: '/images/kep1.jpg', },
  { image: '/images/kep2.jpg',  }
];
</script>

<style scoped>
.carousel-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.carousel-image {
  max-width: 100%;
  border-radius: 10px;
}

.carousel-text {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>
