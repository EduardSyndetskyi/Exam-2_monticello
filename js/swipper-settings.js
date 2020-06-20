var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  direction: 'horizontal',
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
});

var x = document.getElementsByClassName("section");

  for(var i = 0; i < x.length; i++) {

var el = x[i];

var swiper = el.getElementsByClassName("swiper-container1")[0];
var nx = el.getElementsByClassName("swiper-button-next")[0];
var pr = el.getElementsByClassName("swiper-button-prev")[0];
var pag = el.getElementsByClassName("swiper-pagination")[0];

new Swiper(swiper, {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop          : true,
  centeredSlides: true,
  keyboard      : true,
  navigation: {
    nextEl : nx,
    prevEl : pr
  },
  pagination: {
    el: pag
  },
  breakpoints: {
  280   : {
      slidesPerView: 1,
  },
  1024: {
      slidesPerView: 1,
  },
  1700: {
      slidesPerView : 3,
      spaceBetween  : 30
  }
}
})
}

function toggleMenu(e) {
  e.preventDefault(); 
  document.body.classList.toggle ('menu-opened')}
