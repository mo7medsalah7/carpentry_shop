import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: () => import('./photoswipe.esm.js'),
});
lightbox.init();

const whatsapp_link = document.querySelector('.whatsapp_popup');
const whatsapp_chat_box = document.querySelector('.whatsapp_chat_box');

whatsapp_link.addEventListener('click', function () {
  whatsapp_chat_box.classList.toggle('opacityChanger');
});
