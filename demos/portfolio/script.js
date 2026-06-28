// Lucide Icons
if (window.lucide) {
  lucide.createIcons();
}

// Footer Year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Custom Cursor
const canUseCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (canUseCustomCursor) {
  const cursorDot = document.createElement("div");
  cursorDot.classList.add("cursor-dot");

  const cursorOutline = document.createElement("div");
  cursorOutline.classList.add("cursor-outline");

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  const animateCursor = () => {
    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateCursor);
  };

  animateCursor();

  const hoverElements = document.querySelectorAll(
    "a, button, .btn, .skill-card, .work-card, .venture-card, .contact-card, .about-card, .image-panel"
  );

  hoverElements.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      cursorOutline.classList.add("cursor-hover");
    });

    item.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("cursor-hover");
    });
  });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Floating Navbar Scroll Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Premium Card Tilt Effect
const tiltCards = document.querySelectorAll(
  ".skill-card, .work-card, .venture-card, .about-card, .image-panel"
);

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (!canUseCustomCursor) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// Magnetic Buttons
const magneticButtons = document.querySelectorAll(".btn");

magneticButtons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    if (!canUseCustomCursor) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.10}px, ${y * 0.10}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});
