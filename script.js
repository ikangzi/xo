const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const navLinks = document.querySelectorAll('.nav-overlay a');

// --- THEME LOGIC START ---

// 1. Function to apply the theme
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙'; 
    } else {
        document.body.removeAttribute('data-theme');
        themeIcon.textContent = '☀️'; 
    }
}

// 2. Load the saved theme when the script runs
const savedTheme = localStorage.getItem('site-theme');
applyTheme(savedTheme); // If null, it defaults to dark (removeAttribute)

// 3. Updated Toggle Event Listener
themeToggle.addEventListener('click', () => {
    const isCurrentlyLight = document.body.getAttribute('data-theme') === 'light';
    const newTheme = isCurrentlyLight ? 'dark' : 'light';
    
    // Save to browser memory
    localStorage.setItem('site-theme', newTheme);
    
    // Apply the change
    applyTheme(newTheme);
});

// --- THEME LOGIC END ---


// Toggle Menu Function
function toggleMenu() {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('open');
    
    if (navMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

burgerBtn.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

