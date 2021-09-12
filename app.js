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
var tl = gsap.timeline();

tl.from('.fx1', {
  duration: 0.6,
  opacity: 0,
  y: 150,
  stagger: 0.3,
});

tl.from('.fx3', {
  duration: 0.4,
  opacity: 0,
});

// tl.from('.fx2', {
//   ScrollTrigger: {
//     trigger: '.fx2',
//     start: 'top top',
//   },
//   duration: 0.6,
//   opacity: 0,
//   x: -50,
//   stagger: 0.2,
// })