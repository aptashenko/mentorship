<template>
  <div class="banner-hero">
    <div class="banner-hero__content">
      <div class="banner-hero__left">
        <p class="banner-hero__top">Менторинг по Vue.js</p>
        <h1 class="banner-hero__title">
          Прискорюй своє навчання Vue.js з досвідченим ментором!
        </h1>
        <h2 class="banner-hero__subtitle">
          Отримай глибокі знання та практичні навички під керівництвом експерта
        </h2>
        <base-button class="banner-hero__cta">
          Почати!
        </base-button>
      </div>
      <div class="banner-hero__right">
        <div class="banner-hero__image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style lang="scss" scoped>
.banner-hero {
  padding: 40px 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  &__image {
    background: gray;
    width: 100%;
    padding-bottom: 100%;
  }

  &__top {
    font-size: 16px;
    line-height: 27px;
    color: $green;
  }

  &__title {
    font-size: 48px;
    line-height: 68px;
    margin-bottom: 10px;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 28px;
  }

  &__cta {
    margin-top: 22px;
    min-width: 200px;
  }
}
</style>
