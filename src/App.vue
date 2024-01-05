<script setup lang="ts">
import Home from "@/views/Home.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";
import Blog from "./views/Blog.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheNavigation from "./components/TheNavigation.vue";
import { onBeforeMount, ref, type Component, provide } from "vue"; 

const currentView = ref("home")
const views = new Map<string, Component>()
views.set("home", Home)
views.set("projects", Projects)
views.set("contact", Contact)
views.set("blog", Blog)

function setView(name: string) { 
    currentView.value = name
}

provide("setView", setView)
provide("currentView", currentView)

onBeforeMount(() => {
  ui("mode", localStorage.getItem("mode") ?? "light");

  setView("home")
});
</script>

<template>
  <TheNavigation />

  <main>
    <Transition name="view" mode="out-in">
      <component :is="views.get(currentView)"></component>
    </Transition>
  </main>

  <TheFooter />
</template>

<style>
.view-enter-active {
  animation: fading 0.5s ease;
}

.view-leave-from {
  opacity: 1;
}

.view-leave-to {
  opacity: 0;
}

.view-leave-active {
  transition: opacity 0.5s ease;
}

@keyframes fading {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
