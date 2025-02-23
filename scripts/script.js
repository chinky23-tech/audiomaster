// script.js

/* Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });*/
  // hero section
  
  const canvas = document.getElementById("soundwave");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const wave = {
    amplitude: 150,
    frequency: 0.02,
    speed: 0.03,
  };
  
  let increment = 0;
  
  function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
  
    for (let x = 0; x < canvas.width; x++) {
      const y =
        canvas.height / 2 +
        Math.sin(x * wave.frequency + increment) * wave.amplitude;
      ctx.lineTo(x, y);
    }
  
    ctx.strokeStyle = "rgba(0, 170, 255, 0.7)";
    ctx.lineWidth = 2;
    ctx.stroke();
    increment += wave.speed;
  }
  
  function animateWave() {
    drawWave();
    requestAnimationFrame(animateWave);
  }
  
  animateWave();
  
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  // toggle navbar modal
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  };
  
