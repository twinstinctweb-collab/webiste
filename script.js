const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const revealElements = document.querySelectorAll(
    ".service-card, .showcase-card, .why-card, .process-card, .testimonial-card, .cta-banner, .contact-content"
);

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 80) {
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});