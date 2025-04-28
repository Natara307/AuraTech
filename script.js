document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  const menuLinks = document.querySelectorAll('.side-menu a');
  const slides = document.querySelectorAll('.slide');
  const closeMenu = document.getElementById('close-menu');
  
  // Menú hamburguesa
  menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open'); // <-- AÑADIDO
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
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
