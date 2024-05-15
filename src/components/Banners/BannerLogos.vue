<template>
  <carousel
      :items-to-show="3.5"
      :wrap-around="true"
      :autoplay="3000"
      :mouse-drag="false"
      :touch-drag="false"
  >
    <slide
        v-for="slide of data"
        :key="slide.label"
    >
      <div class="banner-logos__item">
        <vue-icon
            :name="slide.logo"
            class="banner-logos__icon"
        />
        <p>{{slide.label}}</p>
      </div>
    </slide>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';

const data = [
  {
    logo: 'pinia-icon',
    label: 'Pinia'
  },
  {
    logo: 'vite-icon',
    label: 'Vite'
  },
  {
    logo: 'vue-icon',
    label: 'Vue.js'
  },
  {
    logo: 'vue-icon',
    label: 'Vue Router'
  },
]
</script>

<style lang="scss" scoped>
.banner-logos {
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  &__icon {
    width: 120px;
    height: 140px;
  }
}
</style>
