document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  const menuLinks = document.querySelectorAll('.side-menu a');
  const slides = document.querySelectorAll('.slide');
  
  // Menú hamburguesa
  menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('open');
    });
  });

  // Slider automático
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 4000); // Cambia cada 4 segundos
});
