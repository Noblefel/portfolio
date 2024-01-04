<template>
  <section class="about surface">
    <!-- <div class="row wrap center-align"> 
      <button class="large secondary">Github</button>
      <button class="large inverted surface-text">Get in touch 📧</button>
    </div> -->

    <div class="wrapper">
      <div class="grid">
        <div class="s12 m12 s m center-align">
          <img src="@/assets/images/profile.JPG" class="profile" />
          <h2 class="center-align">Hey There 👋</h2>
          <div class="divider large centered primary"></div>
        </div>
        <div class="s12 m12 l6">
          <div class="text">
            <p>
              <b>I'm Jibran,</b>
              A student with a passion for
              <span class="cyan-text font-700">Backend Development</span>.
              Currently pursuing a degree in Information System.
            </p>
            <p>
              <b>Outside of classroom,</b>
              I kept my focus on learning from many platforms such as Udemy and
              YouTube. And then apply the knowledge i acquired through hands-on
              projects. You can view it in
              <span class="cyan-text font-700">Projects</span> or in my Github
              Repository.
            </p>
            <p>
              <b>How it all started.</b> Back then, i didn't have a clear
              interest that truly captivated me and it wasn't until i discovered
              programming that everything i learned started to "click". But
              still, i was skeptical about whether this was the right path for
              me, but as time went by i became increasingly convinced that it
              was a good fit.
            </p>
            <p>
              <b>What i love</b>
              most about programming is that i can see the progress of what i am
              building. Seeing the lines of code transform into a functional
              application is just satisfying.
            </p>
          </div>
        </div>
        <div class="l l6">
          <div class="profile-flex">
            <div>
              <h2 class="center-align">Hey There 👋</h2>
              <div class="divider large primary"></div>
            </div>
            <div>
              <img src="@/assets/images/profile.JPG" class="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.about {
  padding: 3rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;

  .grid {
    margin: auto;

    .profile-flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }

    .profile {
      height: clamp(13rem, calc(10rem + 10vw), 18rem);
      border-radius: 12px;
      transition: 0.2s all ease-in;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .text {
      max-width: 35rem;
      margin: auto;

      p {
        margin: 2rem 0;
      }
    }
  }
}
</style>
