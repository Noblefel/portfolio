<template>
  <div>
    <PageHeader
      h="Hey There 👋"
      sub="<span class='bold'>I'im Jibran</span>, 
          a student with a passion for
          <span class='cyan-text bold'>Backend Development.</span>
          Currently pursuing a degree in Information System.
      "
    >
    </PageHeader>

    <About />

    <Technologies />

    <div class="large-space"></div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import About from "@/components/home/About.vue";
import Technologies from "@/components/home/Technologies.vue";
</script>
