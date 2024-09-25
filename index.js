const navbar =  document.querySelector('#navbar');
const nav_menu = document.querySelector('#nav_menu');

navbar.addEventListener('click', () => {
    if (nav_menu.classList.contains('hidden')) {
        nav_menu.classList.remove('hidden');
    } else {
        nav_menu.classList.add('hidden');
    }
});