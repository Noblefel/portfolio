<template>
  <nav class="center">
    <div class="row responsive">
      <div></div>
      <div class="middle-align">
        <TheThemeSwitch />
      </div>
      <a @click="setView('home')" :class="linkClass('home')">Home & About Me</a>
      <a @click="setView('projects')" :class="linkClass('projects')">Projects</a>
      <a @click="setView('contact')" :class="linkClass('contact')">Contact</a>
      <a @click="setView('blog')" :class="linkClass('blog')">Blog</a>
      <div>&nbsp;</div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import TheThemeSwitch from "./TheThemeSwitch.vue"; 
import { inject, type Ref, ref } from "vue";

const currentView: Ref = inject("currentView", ref())
const setView: Function = inject("setView", () => {})

const linkClass = (name: string) => {
  if (currentView.value == name) {
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
