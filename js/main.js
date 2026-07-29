document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a");

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".art-track");
  const slides = Array.from(track.children);
  const prevBtn = carousel.querySelector(".art-nav-prev");
  const nextBtn = carousel.querySelector(".art-nav-next");
  const counterCurrent = carousel.querySelector(".art-counter-current");
  const total = slides.length;
  let index = 0;

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    if (counterCurrent) counterCurrent.textContent = String(index + 1);
  };

  const goTo = (newIndex) => {
    index = (newIndex + total) % total;
    update();
  };

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goTo(index - 1);
    if (event.key === "ArrowRight") goTo(index + 1);
  });

  update();
});
