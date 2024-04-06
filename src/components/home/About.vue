<template>
  <section id="about">
    <div class="space"></div>
    <img src="@/assets/images/profile.jpg" class="profile center" />
    <h5 class="card-shadow center">Get to know me 📋</h5>
    <div class="space"></div>

    <div class="chip no-margin">
      <i class="grey-text fill">school</i>
      <p id="outside-of-classroom">Outside of classroom</p>
    </div>
    <p>
      <b>I kept my focus</b> on learning from many platforms such as Udemy and
      YouTube. And then apply those knowledge i acquired with hands-on projects.
      You can view it in <span class="cyan-text bold">Projects</span> or in my
      Github Repository.
    </p>

    <div class="chip no-margin">
      <i class="cyan-text fill">flag</i>
      <p id="how-it-started">How it all started</p>
    </div>
    <p>
      <b>Back then</b>, i didn't have a clear interest that truly captivated me
      and it wasn't until i discovered programming that everything i learned
      started to <span class="cyan-text bold">"click"</span>. But still, i was
      skeptical about whether this was the right path for me, but as time went
      by i became increasingly convinced that it was a good fit.
    </p>

    <div class="chip no-margin">
      <i class="red-text fill">favorite</i>
      <p id="what-i-love">What i love</p>
    </div>
    <p>
      <b>What i love</b>
      most about programming is that i can see the progress of what i am
      building. Seeing the lines of code transform into a functional application
      is just satisfying.
    </p>
  </section>
</template>

<style scoped>
#about {
  padding: 2rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  max-width: 700px;
  margin: auto;

  .profile {
    height: clamp(10rem, calc(8rem + 10vw), 15rem);
    border-radius: 12px;
  }

  .chip {
    margin-top: 1.5rem !important;
  }
}
</style>
