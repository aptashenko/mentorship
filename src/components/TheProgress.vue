<template>
  <div class="the-progress">
    <div
        class="the-progress__value"
        :style="{width: progress + '%'}"
    />
  </div>
</template>

<script setup>
defineProps({
  progress: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="scss" scoped>
.the-progress {
  position: relative;
  height: 30px;
  width: 100%;
  background: $light-green;
  border-radius: 0 12px 12px 0;

  &__value {
    height: 100%;
    background: $green;
    border-radius: 0 12px 12px 0;
  }
}
</style>
