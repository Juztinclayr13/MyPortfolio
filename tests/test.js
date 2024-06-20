const toggleButton = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});
