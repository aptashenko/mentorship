<template>
  <div class="banner-skills">
    <div class="banner-skills__content">
      <div class="banner-skills__left">
        <div class="banner-skills__image" />
      </div>
      <div class="banner-skills__right">
        <h2>Навички:</h2>
        <div class="banner-skills__list">
          <div
              v-for="item of data"
              :key="item.id"
              class="banner-skills__item"
          >
            <div class="banner-skills__title">
              <h3>{{ item.label }}</h3>
              <vue-icon :name="item.icon" />
            </div>
            <the-progress :progress="item.value" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheProgress from '@/components/TheProgress.vue'
const data = [
  {
    id: 1,
    label: 'Pinia',
    icon: 'pinia-icon',
    value: 80,
  },
  {
    id: 2,
    label: 'Vue Router',
    icon: 'vue-icon',
    value: 84,
  },
  {
    id: 3,
    label: 'Vue.js',
    icon: 'vue-icon',
    value: 90,
  },
  {
    id: 4,
    label: 'Vite',
    icon: 'vite-icon',
    value: 80,
  },
]
</script>

<style lang="scss">
.banner-skills {
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

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 32px;
  }

  &__item {

  }

  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    gap: 12px;
  }

  & svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
}
</style>
