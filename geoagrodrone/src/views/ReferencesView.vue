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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.carousel-item:hover {
  transform: scale(1.05);
}

.carousel-image {
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
}

.carousel-item:hover .carousel-image {
  transform: scale(1.1);
}

.carousel-text {
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
</style>
