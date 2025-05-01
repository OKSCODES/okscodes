// Typing effect for the job title
const jobTitle = document.querySelector("header p");
const text = "BCA Graduate | Freelance Web Developer";
let index = 0;

function typeEffect() {
  jobTitle.textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Scroll reveal effect
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 300;
    const height = section.offsetHeight;

    if (top > offset && top < offset + height) {
      section.classList.add("reveal");
    } else {
      section.classList.remove("reveal");
    }
  });
});

// Input focus highlight
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#007bff";
    input.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#ccc";
    input.style.boxShadow = "none";
  });
});

// Profile picture hover (redundant if CSS handles it, but retained for fine control)
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
  profilePic.addEventListener('mouseover', () => {
    profilePic.style.transform = 'scale(1.05)';
    profilePic.style.transition = 'transform 0.3s ease';
  });
  profilePic.addEventListener('mouseout', () => {
    profilePic.style.transform = 'scale(1)';
  });
}

// Dark mode toggle logic
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
