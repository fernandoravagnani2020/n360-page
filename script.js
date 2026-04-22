const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = Array.from(document.querySelectorAll("section[id], header[id]"));
const currentYear = document.getElementById("current-year");

const setMenuOpen = (isOpen) => {
  hamburger.classList.toggle("open", isOpen);
  navMenu.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
};

window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);

    const scrollPosition = window.scrollY + 140;

    let activeId = "";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeId}`;
      link.classList.toggle("active", isActive);
    });
  },
  { passive: true }
);

hamburger.addEventListener("click", () => {
  setMenuOpen(!navMenu.classList.contains("open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

document.body.classList.add("js-loaded");

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  }
);

reveals.forEach((element) => observer.observe(element));

setTimeout(() => {
  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
    element.classList.add("visible");
  });
}, 1600);

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
