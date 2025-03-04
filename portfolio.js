
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

 
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

 
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing ScrollReveal');
    if (typeof ScrollReveal === 'undefined') {
        console.error('ScrollReveal not loaded - revealing all content manually');
        
        document.querySelectorAll('.hero-content, .about-container, .service-card, .portfolio-item')
            .forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
            });
        return;
    }

    console.log('ScrollReveal loaded successfully');
    const sr = ScrollReveal({
        reset: false,
        mobile: true,
        distance: '50px',
        duration: 1000,
        easing: 'ease-out',
        cleanup: true 
    });

    sr.reveal('.hero-content', { origin: 'bottom', delay: 200 });
    sr.reveal('.about-container', { origin: 'bottom', delay: 200 });
    sr.reveal('.service-card', { origin: 'bottom', delay: 200, interval: 100, distance: '30px' });
    sr.reveal('.portfolio-item', { origin: 'bottom', delay: 200, interval: 100, distance: '30px' });
});

 
gsap.from('.navbar', { y: -100, duration: 1, ease: 'power2.out' });
gsap.from('.hero-subtitle', { opacity: 0, x: -50, duration: 1, delay: 0.5 });
gsap.from('h1', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
gsap.from('.hero-description', { opacity: 0, y: 30, duration: 1, delay: 1 });
gsap.from('.hero-cta', { opacity: 0, y: 20, duration: 1, delay: 1.2 });

 
const toTopBtn = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    toTopBtn.classList.toggle('active', window.scrollY > 300);
});
toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



 