const navbar =  document.querySelector('#navbar');
const nav_menu = document.querySelector('#nav_menu');

navbar.addEventListener('click', () => {
    if (nav_menu.classList.contains('hidden')) {
        nav_menu.classList.remove('hidden');
        navbar.src = "images/svg/close.svg";
    } else {
        nav_menu.classList.add('hidden');
        navbar.src = "images/svg/hamburger.svg"
    }
});

if (window.location.protocol !== 'https:') {
    window.location.href = 'https://' + window.location.hostname + window.location.pathname + window.location.search;
}
