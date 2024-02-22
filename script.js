document.getElementById('toggleMenu').addEventListener('click', function() {
    let menu = document.getElementById('menu').querySelector('ul');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});