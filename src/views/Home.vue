<template>
  <div>
    <PageHeader
      h="Hey There 👋"
      sub="<span class='bold'>I'im Jibran</span>, 
          a student with a passion for
          <span class='cyan-text bold'>Coding</span>.
          Currently pursuing a degree in Information System.
      "
    >
    </PageHeader>

    <About />

    <Technologies />
    
    <Education />

    <div class="large-space"></div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import About from "@/components/home/About.vue";
import Education from "@/components/home/Education.vue";
import Technologies from "@/components/home/Technologies.vue";
</script>
