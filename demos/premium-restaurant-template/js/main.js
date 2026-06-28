const cursor = document.querySelector('.cursor-glow');
const progress = document.getElementById('scrollProgress');
const topBtn = document.getElementById('topBtn');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const reveals = document.querySelectorAll('.reveal');

document.addEventListener('mousemove', (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / height) * 100;
  progress.style.width = scrolled + '%';
  topBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

document.querySelector('.booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Reservation request captured! Connect this to WhatsApp, email, or backend for clients.');
});
