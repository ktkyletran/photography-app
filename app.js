const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');
const body = document.querySelector('body')

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.fx1', {
  duration: 0.6,
  opacity: 0,
  x: 35,
});
gsap.from('.fx2', {
  duration: 0.6,
  opacity: 0,
  x: -35,
});

gsap.from('.fx3', {
  duration: 0.4,
  y: 35,
  opacity: 0,
  delay: 0.8,
});

gsap.from('.fx4', {
  scrollTrigger: {
    trigger: '.fx4',
    start: "top center",
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
  stagger: 0.2,
});

gsap.from('.fx5', {
  scrollTrigger: {
    trigger: '.fx5',
    start: "top bottom"
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
});

gsap.from('.fx6', {
  scrollTrigger: {
    trigger: '.fx6',
    start: "top center"
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.3,
});

gsap.from('.fx7', {
  scrollTrigger: {
    trigger: '.fx7',
    start: "top bottom"
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
});

gsap.from('.fx8', {
  scrollTrigger: {
    trigger: '.fx8',
    start: "top bottom"
  },
  opacity: 0,
  duration: 0.8,
  stagger: 0.6,
  delay: 1.2
});