// Menú móvil accesible
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰ Menú';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú principal');
    const nav = document.querySelector('nav');

    // Insertar botón antes del menú
    nav.parentNode.insertBefore(menuButton, nav);

    menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !expanded);
        nav.style.display = expanded ? 'none' : 'block';
    });
});
