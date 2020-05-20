const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const logo = document.querySelector(".brand");
const about = document.querySelector('.about');
const services = document.querySelector('.offer');
const coworkers = document.querySelector('.help');
const banks = document.querySelector('.price-list');
const contact = document.querySelector('.contact');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}
if (window.matchMedia('(max-width: 1023px)')){
logo.addEventListener('click', handleClick);
hamburger.addEventListener('click', handleClick);
about.addEventListener('click', handleClick);
services.addEventListener('click', handleClick);
coworkers.addEventListener('click', handleClick);
banks.addEventListener('click', handleClick);
contact.addEventListener('click', handleClick);
}
