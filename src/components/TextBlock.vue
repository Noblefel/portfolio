<template>
  <div
    class="block"
    :style="{
      backgroundColor: bgColor,
      borderRadius: '15px',
      border: `1px solid color-mix(in srgb, var(--${backgroundColor}), transparent 70%)`,
      margin: 'auto',
      width: 'fit-content',
      padding: '1rem 1rem',
    }"
  >
    <div class="wrapper"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  backgroundColor: {
    type: String,
    default: "background",
  },
  backgroundOpacity: {
    type: Number,
    default: 95,
  },
});

let bgColor = `color-mix(in srgb, var(--${props.backgroundColor}), transparent ${props.backgroundOpacity}%)`;
</script>

<style scoped>
:slotted(p) {
  font-weight: 700;
  font-size: clamp(0.5rem, calc(0.5rem + 2vw), 2rem);
} 
</style>
