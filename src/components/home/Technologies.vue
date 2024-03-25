<template>
  <section id="technologies">
    <h5 class="card center wrap">
      <span class="cyan-text">Technologies</span>
      i mainly use 💻
    </h5>

    <div class="space"></div>

    <div class="grid large-space">
      <article class="s12 m6 l6 card-shadow">
        <img src="@/assets/images/go.png" alt="Go Programming Language" />
        <p>Go</p>
      </article>
      <article class="s12 m6 l6 card-shadow">
        <img src="@/assets/images/vue.png" alt="Vue JS Framework" />
        <p>Vue</p>
      </article>
      <article class="s12 m6 l6 card-shadow">
        <img src="@/assets/images/postgresql.png" alt="Postgresql" />
        <p>Postgresql</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
#technologies {
  max-width: 700px;
  margin: auto;

  article {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    gap: 1rem;
    border-color: var(--purple);
    filter: drop-shadow(var(--purple) 6px 6px 0);

    img {
      height: 100px;
      object-fit: contain;
    }
  }
}
</style>
