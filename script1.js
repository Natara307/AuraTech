document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuLinks = document.querySelectorAll('.side-menu a');
    const form = document.querySelector('form');
    
    // Asegurar que el botón de cerrar menú existe antes de usarlo
    let closeButton = document.querySelector('.close-menu');
    if (!closeButton) {
        closeButton = document.createElement('button');
        closeButton.innerText = '✖';
        closeButton.classList.add('close-menu');
        sideMenu.prepend(closeButton);
    }

    // Función para abrir/cerrar menú
    function toggleMenu() {
        sideMenu.classList.toggle('open');
    }

    // Evento para botón de menú
    menuToggle?.addEventListener('click', toggleMenu);

    // Evento para botón de cerrar menú
    closeButton.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });

    // Cerrar menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            sideMenu.classList.remove('open');
        });
    });

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
