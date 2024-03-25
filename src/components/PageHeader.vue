<script setup>
defineProps({
  h: { type: String, required: true },
  sub: { type: String },
});
</script>

<template>
  <header>
    <div class="card-shadow center">
      <h1>{{ h }}</h1>
    </div>

    <div class="large-space" v-if="sub"></div>

    <div class="card center" v-if="sub">
      <p v-html="sub"></p>
    </div>

    <slot></slot>
  </header>
</template>

<style scoped>
header {
  padding: 6rem 1rem 3rem 1rem;

  p {
    font-size: clamp(1.1rem, calc(0.8rem + 1vw), 1.6rem);
  }

  .card {
    max-width: 650px;
  }
}
</style>
