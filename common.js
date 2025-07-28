// common.js - Código para elementos compartidos
document.addEventListener('DOMContentLoaded', () => {
  // Generar menú lateral dinámicamente
  const menuItems = [
    { href: 'index.html', text: 'Inicio' },
    { href: 'services.html', text: 'Servicios' },
    { href: 'gallery.html', text: 'Galería' },
    { href: 'us.html', text: 'Nosotros' },
    { href: 'resources.html', text: 'Recursos' },
    { href: 'contact.html', text: 'Contacto' }
  ];
  
  const sideMenu = document.getElementById('side-menu');
  if (sideMenu) {
    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      li.appendChild(a);
      menuList.appendChild(li);
    });
    sideMenu.insertBefore(menuList, sideMenu.firstChild);
  }
});