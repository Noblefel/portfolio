<template>
  <section class="technologies surface">
    <div class="wrapper">
      <div class="divider centered"></div>

      <h3 class="center-align">
        <span class="cyan-text">Technologies&nbsp;</span>
        i mainly use
      </h3>

      <div class="space"></div>
      <div class="grid">
        <div class="s12 m4 l4">
          <div class="card">
            <img src="@/assets/images/go.png" alt="Go Programming Language" />
            <p>Go</p>
          </div>
        </div>
        <div class="s12 m4 l4">
          <div class="card">
            <img src="@/assets/images/vue.png" alt="Vue JS Framework" />
            <p>Vue</p>
          </div>
        </div>
        <div class="s12 m4 l4">
          <div class="card">
            <img src="@/assets/images/postgresql.png" alt="Postgresql" />
            <p>Postgresql</p>
          </div>
        </div>
        <div class="s12 m4 l4"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.technologies {
  h3 {
    font-size: clamp(1rem, calc(0.6rem + 4vw), 2.5rem);
  }
  .card {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    margin: auto;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 700;
    gap: 1rem;

    img {
      height: 100px;
      object-fit: contain;
    }
  }
}
</style>
