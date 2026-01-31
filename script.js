const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const navLinks = document.querySelectorAll('.nav-overlay a');

// Toggle Menu Function
function toggleMenu() {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('open');
    
    // Prevent scrolling when menu is active
    if (navMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Event Listeners
burgerBtn.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Toggle Theme (Light/Dark) with Icon Swap
themeToggle.addEventListener('click', () => {
    const body = document.body;
    
    if (body.getAttribute('data-theme') === 'light') {
        // Switch to DARK MODE
        body.removeAttribute('data-theme');
        themeIcon.textContent = '☀️'; // Show Sun when dark
    } else {
        // Switch to LIGHT MODE
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙'; // Show Moon when light
    }
});