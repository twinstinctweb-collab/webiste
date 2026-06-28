if (typeof gymConfig !== "undefined") {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    if (gymConfig[key]) el.textContent = gymConfig[key];
  });
  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = `tel:${gymConfig.phone}`;
  });
  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    el.href = `https://wa.me/${gymConfig.whatsapp}`;
  });
  document.querySelectorAll("[data-map-link]").forEach((el) => {
    el.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gymConfig.mapQuery)}`;
  });
  document.querySelectorAll("[data-map-embed]").forEach((el) => {
    el.src = `https://www.google.com/maps?q=${encodeURIComponent(gymConfig.mapQuery)}&output=embed`;
  });
  document.querySelectorAll("[data-trainer-initial]").forEach((el) => {
    el.textContent = gymConfig.trainerName ? gymConfig.trainerName.charAt(0).toUpperCase() : "T";
  });
}

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
document.addEventListener("mousemove", (e) => {
  if (!cursor || !cursorDot) return;
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

document.querySelectorAll(".card-3d").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    card.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px) scale(1.02)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)";
  });
});

document.querySelectorAll(".magnetic").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0px,0px)";
  });
});

if (typeof gsap !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".topbar", { y: -100, opacity: 0, duration: 1, ease: "power4.out" });
  gsap.from(".dock", { y: 100, opacity: 0, delay: 0.2, duration: 1, ease: "power4.out" });
  gsap.from(".hero-left", { opacity: 0, x: -120, duration: 1.2, ease: "power4.out" });
  gsap.from(".hero-right", { opacity: 0, x: 120, duration: 1.2, ease: "power4.out" });
  if (document.querySelector(".contact-main")) gsap.from(".contact-main", { opacity: 0, y: 100, duration: 1.2, ease: "power4.out" });
  gsap.to(".orb-1", { x: 100, y: 80, duration: 20, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".orb-2", { x: -100, y: -80, duration: 22, repeat: -1, yoyo: true, ease: "sine.inOut" });
  if (document.querySelector(".orb-3")) gsap.to(".orb-3", { y: -120, duration: 14, repeat: -1, yoyo: true, ease: "sine.inOut" });
  const animateItems = [".stat-card", ".feature-card", ".program-card", ".price-card", ".trainer-card", ".timings-card", ".cta-box", ".map-box"];
  animateItems.forEach((selector) => {
    gsap.utils.toArray(selector).forEach((item) => {
      gsap.from(item, { scrollTrigger: { trigger: item, start: "top 85%" }, opacity: 0, y: 80, duration: 1, ease: "power3.out" });
    });
  });
  gsap.utils.toArray(".spatial-section").forEach((section) => {
    gsap.to(section, { scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true }, y: -40 });
  });
}

document.addEventListener("mousemove", (e) => {
  const grid = document.querySelector(".bg-grid");
  if (!grid) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  grid.style.transform = `translate(${x}px, ${y}px)`;
});
