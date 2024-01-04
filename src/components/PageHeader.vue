<template>
  <header class="gradient-bg">
    <div class="flex">
      <div>
        <img src="@/assets/images/logo_250.png" class="logo" />
      </div>
      <div>
        <TextBlock :background-color="blockColor" :background-opacity="blockOpacity">
          <slot></slot>
        </TextBlock>
      </div>
    </div>
    <div class="space"></div>
  </header>
</template>

<script setup lang="ts">
import TextBlock from "@/components/TextBlock.vue";
defineProps({
  blockColor: {
    type: String,
    default: "background",
  },
  blockOpacity: {
    type: Number,
    default: 95,
  },
});
</script>

<style scoped>
header {
  padding-top: 6rem;
  .flex {
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    .logo {
      width: 200px;
      border-radius: 50%;
      border: 4px solid var(--on-background);
    }
  }
}
</style>
