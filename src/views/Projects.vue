<template>
  <PageHeader h="My Projects 🗂️" />
  <section id="projects">
    <div class="grid">
      <article class="s12 m6 l6 card no-elevate" v-for="project in projects">
        <img :src="project.image" :alt="project.title" />
        <div class="desc">
          <a :href="project.link" target="_blank" class="wrap">
            {{ project.title }} <i>open_in_new</i>
          </a>
          <p>{{ project.desc }}</p>
        </div>
        <div class="row wrap">
          <div class="chip" v-for="tag in project.tags">
            {{ tag }}
          </div>
        </div>
      </article>
    </div>

    <div class="large-space"></div>
  </section>
</template>

<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import innOne from "@/assets/images/InnOne.jpg";
import contactManagement from "@/assets/images/contact-management.png";
import pendaftaranKursus from "@/assets/images/pendaftaran-kursus.png";
import stove from "@/assets/images/stove.jpg";
import manortalk from "@/assets/images/Manortalk.jpg";
import termRPG from "@/assets/images/term-rpg.png";

const projects = [
  {
    title: "term-rpg",
    image: termRPG,
    desc: "A simple terminal-based RPG where you can battle against various enemies.",
    tags: ["Terminal"],
    link: "https://github.com/Noblefel/term-rpg",
  },
  {
    title: "ManorTalk",
    image: manortalk,
    desc: "Blogging app with filters, search and pagination. This project follows the monolithic architecture",
    tags: ["Web", "Full-stack"],
    link: "https://github.com/Noblefel/Manortalk",
  },
  {
    title: "STOVE",
    image: stove,
    desc: "Reads a CSV file, then generates the formatted HTML table, and converts it into a PDF.",
    tags: ["Tool"],
    link: "https://github.com/Noblefel/stove",
  },
  {
    title: "InnOne Reservations",
    image: innOne,
    desc: "App where user can book a room and featuring admin dashboard for property owners to manage incoming reservations",
    tags: ["Web", "Multi-page"],
    link: "https://github.com/Noblefel/InnOne-bookings-web-app",
  },
  {
    title: "Contact Management API",
    image: contactManagement,
    desc: "Simple rest api to make and edit contacts, with simple JWT authentication and Admin guard.",
    tags: ["API"],
    link: "https://github.com/Noblefel/Rest-Api-Managemen-Kontak",
  },
  {
    title: "Simulasi Pendaftaran Kursus",
    image: pendaftaranKursus,
    desc: "Proyek penilaian akhir semester matkul Dasar Pemrograman.",
    tags: ["Terminal"],
    link: "https://github.com/Noblefel/Simulasi-Pendaftaran-Kursus",
  },
];
</script>

<style scoped>
#projects {
  max-width: 900px;
  margin: auto;
}

.card {
  overflow: hidden;
  margin: 0;
  padding-bottom: 1rem;
  border-color: color-mix(in srgb, var(--on-surface), transparent 90%);
  &:hover {
    border-color: var(--purple);
  }

  img {
    width: 100%;
    height: clamp(150px, calc(120px + 8vw), 220px);
    object-fit: cover;
  }

  .desc {
    padding: clamp(1rem, calc(3rem - 3vw), 2rem) 0 0 0;
    font-size: 0.95rem;
    font-weight: 500;
    opacity: 0.9;

    a {
      font-weight: 700;
      transition: 0.2s all ease-in;
      font-size: clamp(1.5rem, calc(0.5rem + 2vw), 1.6rem);
    }
  }

  .chip {
    background: linear-gradient(to right, var(--purple), var(--cyan));
    border: 0;
    color: white;
  }

  @media screen and (max-width: 992px) {
    img {
      width: calc(100% + 2rem);
      margin: -1rem !important;
      border-radius: 0;
    }
  }
}
</style>
