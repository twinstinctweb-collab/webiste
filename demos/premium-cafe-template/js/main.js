const cursor = document.querySelector('.cursor-glow');
const progress = document.getElementById('scrollProgress');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const header = document.getElementById('siteHeader');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / height) * 100;
  progress.style.width = `${scrolled}%`;
  header.style.background = window.scrollY > 80 ? 'rgba(18,13,9,.88)' : 'rgba(18,13,9,.62)';
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelector('.booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Reservation request received! Connect this form to WhatsApp/email for real client projects.');
});
