<template>
  <div>
    <section class="contact gradient-bg">
      <TextBlock background-color="surface" :background-opacity="90">
        <div class="medium-width m l"></div>
        <p class="center-align">Reach out to me 😊</p>
      </TextBlock>

      <div class="medium-space"></div>
      <div class="wrapper">
        <div class="grid">
          <a
            href="https://github.com/Noblefel"
            target="_blank"
            class="s6 m4 l3 card surface"
          >
            <img src="@/assets/images/github.png" alt="" />
            <h6>Noblefel</h6>
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-jibran/"
            target="_blank"
            class="s6 m4 l3 card surface"
          >
            <img src="@/assets/images/linkedin.png" alt="" />
            <h6>abdullah-jibran</h6>
          </a>
        </div>
      </div>
    </section>

    <div class="divider"></div>
  </div>
</template>

<script setup lang="ts">
import TextBlock from "@/components/TextBlock.vue";
</script>

<style scoped>
section.contact {
  padding: 6rem 1rem;
  .card {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;

    img {
      width: clamp(4rem, calc(3rem + 5vw), 7rem); 
      background-color: var(--on-background);
    }

    h6 {
      font-size: clamp(1rem, calc(0.2rem + 2.5vw), 1.4rem);
    }
  }
}
</style>
