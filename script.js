const toggles = document.querySelectorAll(".toggle");
const body = document.getElementsByTagName("body")[0];

toggles.forEach((e) => e.addEventListener("click", toggleTheme));

function toggleTheme() {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    setIcon();
    return;
  }

  body.classList.add("light");
  body.classList.remove("dark");
  setIcon();
}

function setIcon() {
  const newIcon = body.classList.contains("light") ? "dark_mode" : "light_mode";

  document.querySelectorAll(".toggle i").forEach((e) => {
    e.innerText = newIcon;
  });
}

const routes = document.querySelectorAll("[data-nav]");
const pages = document.querySelectorAll("main");

routes.forEach((e) => {
  e.addEventListener("click", () => {
    const to = e.getAttribute("data-nav") ?? "about";
    setPage(to);
  });
});

function setPage(id) {
  pages.forEach((e) => {
    e.style.display = e.id == id ? "block" : "none";
  });

  routes.forEach((e) => {
    e.getAttribute("data-nav") == id
      ? e.classList.add("active")
      : e.classList.remove("active");
  });

  window.scrollTo(0, 0);
}

const filters = document.querySelectorAll("#filter .item");
const projects = document.querySelectorAll("#projects article");

filters.forEach((e) => e.addEventListener("click", setFilter));

function setFilter(e) {
  const filter = e.target.innerText.toLowerCase();

  filters.forEach((e) => e.classList.remove("active"));
  e.target.classList.add("active");

  if (filter == "semua") {
    projects.forEach((e) => (e.style.display = "block"));
    return;
  }

  projects.forEach((e) => {
    const tags = e.querySelectorAll(".tags span");

    for (const tag of tags) {
      if (tag.innerText.toLowerCase() == filter) {
        e.style.display = "block";
        return;
      }
    }

    e.style.display = "none";
  });
}
