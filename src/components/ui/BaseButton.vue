<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  font-size: 14px;
  line-height: 28px;
  color: $light-green;
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
  border: none;
  background: $green;
  transition: all .25s ease;

  &:hover {
    opacity: 0.8;
  }
}
</style>
