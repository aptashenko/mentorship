<template>
  <div class="the-header">
    <div class="the-header__logo">
      <a href="#">
        <vue-icon name="vue-icon" />
      </a>
    </div>
    <ul class="the-header__menu">
      <li class="the-header__item">
        <a href="#main">Головна</a>
      </li>
      <li class="the-header__item">
        <a href="#about">Детальніше</a>
      </li>
    </ul>
    <base-button>
      В телеграм
    </base-button>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style lang="scss" scoped>
.the-header {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    transition: all .25s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }

  &__menu {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex: 1;
  }

  &__item {
    & a:hover {
      opacity: 0.5;
    }
  }
}
</style>
