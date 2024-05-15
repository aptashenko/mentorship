<template>
  <div class="container">
    <the-header />
    <banner-hero />
    <banner-logos />
    <banner-skills />
    <the-footer />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import BannerHero from '@/components/Banners/BannerHero.vue'
import BannerLogos from '@/components/Banners/BannerLogos.vue'
import BannerSkills from '@/components/Banners/BannerSkills.vue'
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
.container {
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
