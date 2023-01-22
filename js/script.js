let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}
var swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 20,
   effect: 'fade',
   loop: true,
   speed: 300,
   mousewheel: {
      invert: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
});