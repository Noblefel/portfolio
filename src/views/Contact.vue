<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <PageHeader h="Reach out to me 😊">
    <section id="contacts">
      <div class="grid">
        <a href="https://github.com/Noblefel" target="_blank" class="s6 m6 l6">
          <div class="card-shadow center-align">
            <img src="@/assets/images/github.png" alt="Github" />
            <h6 class="center-align">Noblefel</h6>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/abdullah-jibran/"
          target="_blank"
          class="s6 m6 l6"
        >
          <div class="card-shadow center-align">
            <img src="@/assets/images/linkedin.png" alt="Linkedin" />
            <h6 class="center-align">abdullah-jibran</h6>
          </div>
        </a>
      </div>
    </section>
  </PageHeader>
</template>

<style scoped>
#contacts {
  padding: 6rem 1rem;
  max-width: 700px;
  margin: auto;
  height: 100vh;

  .card-shadow {
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    height: 100%;
    width: 100%;
    filter: drop-shadow(black 6px 6px 0);

    img {
      width: clamp(4rem, calc(3rem + 5vw), 7rem);
      background-color: white;
    }

    h6 {
      font-size: clamp(1rem, calc(0.2rem + 2.5vw), 1.4rem);
    }
  }
}
</style>
