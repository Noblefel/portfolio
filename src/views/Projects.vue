<template>
  <div>
    <section class="no-padding">
      <PageHeader block-color="surface">
        <div class="medium-width m l"></div>
        <p class="center-align">My Projects 🗂️</p>
      </PageHeader>
    </section>

    <section class="projects surface">
      <div class="wrapper">
        <div class="grid">
          <div class="s12 m6 l6 card" v-for="project in projects">
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import innOne from "@/assets/images/InnOne.jpg";
import contactManagement from "@/assets/images/contact-management.png";
import pendaftaranKursus from "@/assets/images/pendaftaran-kursus.png";
import portfolio from "@/assets/images/portfolio.jpg";
import stove from "@/assets/images/stove.jpg"

const projects = [
{
    title: "STOVE",
    image: stove,
    desc: "Reads a CSV file, creates an HTML representation of the data with a styled table, and then converts it into a PDF",
    tags: ["Tool"],
    link: "https://github.com/Noblefel/stove",
  },
  {
    title: "Portfolio",
    image: portfolio,
    desc: "My personal portfolio",
    tags: ["Web", "Static"],
    link: "https://github.com/Noblefel/Portfolio",
  },
  {
    title: "InnOne Reservations",
    image: innOne,
    desc: "Web application where user can book a room and featuring admin dashboard for property owners to manage the incoming reservations",
    tags: ["Web", "Multi-page-app"],
    link: "https://github.com/Noblefel/InnOne-bookings-web-app",
  },
  {
    title: "Contact Management API",
    image: contactManagement,
    desc: "Small scale rest api to create and manage contacts, with simple JWT authentication and Admin guard.",
    tags: ["API"],
    link: "https://github.com/Noblefel/Rest-Api-Managemen-Kontak",
  },
  {
    title: "Simulasi Pendaftaran Kursus",
    image: pendaftaranKursus,
    desc: "Proyek penilaian akhir semester matkul Dasar Pemrograman. Dibuat menggunakan Python.",
    tags: ["Terminal"],
    link: "https://github.com/Noblefel/Simulasi-Pendaftaran-Kursus",
  },
];
</script>

<style scoped>
.card {
  width: 100%;
  overflow: hidden;
  transition: all 0.2s ease-in;

  &:hover {
    a {
      color: var(--on-secondary);
    }
  }

  img {
    width: 100%;
    height: clamp(150px, calc(120px + 8vw), 220px);
    object-fit: cover;
  }

  .desc {
    padding: clamp(1rem, calc(3rem - 3vw), 2rem) 0 0 0;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.9;

    a {
      font-weight: 700;
      transition: 0.2s all ease-in;
      font-size: clamp(1.5rem, calc(0.5rem + 2vw), 1.6rem);
    }
  }

  .chip {
    background-image: linear-gradient(to right, var(--primary), #2436d6);
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
