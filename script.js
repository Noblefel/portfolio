const toggles = document.querySelectorAll(".toggle");
const body = document.getElementsByTagName("body")[0];

toggles.forEach((e) => {
  e.addEventListener("click", toggleTheme);
});

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
    if (e.id != id) {
      e.style.display = "none";
      return;
    }

    e.style.display = "block";
  });

  routes.forEach((e) => {
    if (e.getAttribute("data-nav") != id) {
      e.classList.remove("active");
      return;
    }
    e.classList.add("active");
  });

  window.scrollTo(0, 0);
}
