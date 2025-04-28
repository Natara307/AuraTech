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

    // Validación del formulario de contacto
    if (form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const nombre = document.getElementById('nombre').value.trim();
          const email = document.getElementById('email').value.trim();
          const mensaje = document.getElementById('mensaje').value.trim();
          
          if (nombre === '' || email === '' || mensaje === '') {
              alert('Por favor, complete todos los campos.');
              return;
          }
          
          if (!validateEmail(email)) {
              alert('Por favor, ingrese un email válido.');
              return;
          }
          
          alert('Mensaje enviado correctamente.');
          form.reset();
      });
  }

  // Función para validar email
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});
