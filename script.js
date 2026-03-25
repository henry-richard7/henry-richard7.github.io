// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
const navbar = document.querySelector('.navbar');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Scroll Effects (Navbar style change on scroll)
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(20, 21, 35, 0.85)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(20, 21, 35, 0.6)';
    }
});

// Intersection Observer for Entrance Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe elements with .fade-in-up
document.querySelectorAll('.fade-in-up').forEach(element => {
    fadeObserver.observe(element);
});

// Staggered Animations for items inside grids (like skills, projects, timeline)
const staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Apply a slight delay to each item based on its index
            const container = entry.target.parentElement;
            const items = Array.from(container.querySelectorAll('.stagger-item'));
            const index = items.indexOf(entry.target);
            
            // Add inline style for transition delay
            if (index > -1) {
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
            
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stagger items
document.querySelectorAll('.stagger-item').forEach(element => {
    staggerObserver.observe(element);
});
