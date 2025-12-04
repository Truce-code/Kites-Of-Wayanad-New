// script.js
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if(btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Hero Animation
// Animations: Opacity 0 -> 1, Y-axis translation 20px -> 0
if (document.querySelector('.hero-bg')) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    
    tl.from(".hero-bg", { scale: 1.2, duration: 2.5, ease: "power2.inOut" })
      .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.8, stagger: 0.2 }, "-=1.8")
      .from(".hero-title", { opacity: 0, y: 20, duration: 1 }, "-=1.2")
      .from(".hero-btn", { opacity: 0, y: 20, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");
}

// Package Cards Animation (Scroll Triggered)
const cards = document.querySelectorAll('.package-card');
if (cards.length > 0) {
    cards.forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%", // Trigger when top of card hits 85% of viewport
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        });
    });
}

// Gallery Animation
const galleryItems = document.querySelectorAll('.gallery-item');
if (galleryItems.length > 0) {
    gsap.from(".gallery-item", {
        scrollTrigger: {
            trigger: "#gallery",
            start: "top 85%"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });
}
