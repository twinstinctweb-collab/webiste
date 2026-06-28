const loader = document.getElementById("loader");
const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");
const cursor = document.getElementById("cursor");
const reveals = document.querySelectorAll(".reveal");
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 650);
  revealOnScroll();
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);

  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / height) * 100;
  progress.style.width = `${scrolled}%`;

  revealOnScroll();
});

function revealOnScroll() {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll("a, button, .product-card, .collection-card").forEach((item) => {
  item.addEventListener("mouseenter", () => cursor.classList.add("big"));
  item.addEventListener("mouseleave", () => cursor.classList.remove("big"));
});

menuBtn.addEventListener("click", () => mobileMenu.classList.add("active"));
closeMenu.addEventListener("click", () => mobileMenu.classList.remove("active"));

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("active"));
});

document.querySelectorAll(".product-card button").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Added ✓";
    setTimeout(() => button.textContent = "Add to Bag", 1200);
  });
});

const heroBg = document.querySelector(".hero-bg");
window.addEventListener("scroll", () => {
  const y = window.scrollY * 0.2;
  heroBg.style.transform = `scale(1.05) translateY(${y}px)`;
});
