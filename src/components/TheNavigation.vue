<template>
  <nav class="center">
    <div class="row responsive">
      <div class=""></div>
      <div class="middle-align">
        <TheThemeSwitch />
      </div>
      <RouterLink to="/" :class="linkClass('home')">Home & About Me</RouterLink>
      <RouterLink to="/projects" :class="linkClass('projects')">Projects</RouterLink>
      <RouterLink to="/contact" :class="linkClass('contact')">Contact</RouterLink>
      <RouterLink to="/blog" :class="linkClass('blog')">Blog</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import TheThemeSwitch from "./TheThemeSwitch.vue";
import { RouterLink, useRoute } from "vue-router";
const route = useRoute()

const linkClass = (name: string) => {
  if (route.name == name) {
    return "active no-wave"
  }
  return "no-wave"
}
</script>

<style scoped>
nav {
  padding: 0.5rem;
  margin-top: 1rem;
  height: 3.5rem;
  position: fixed;
  top: 0;
  width: 40rem;
  max-width: 90%;
  z-index: 5;
  background-color: var(--surface);
  border-radius: 125px !important;
  border: 1px solid color-mix(in srgb, var(--background), transparent 70%);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    min-width: 5.5rem;
    padding: 0.5rem 1rem;
    font-weight: 600;
    border-radius: 150px !important;

    &.active {
      background-color: var(--secondary);
      color: var(--on-secondary);
    }

    &:not(.active) {
      background-color: transparent;
      color: var(--on-surface);
      transition: 0.2s all ease-in;

      &:hover {
        color: var(--on-secondary);
      }
    }
  }
}
</style>
