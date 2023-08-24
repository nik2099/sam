var swiper = new Swiper(".mySwiper_5", {
  slidesPerView: "auto",
  centeredSlides: true,
  // spaceBetween: 310,
  loop: true,
  loopedSlides: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper2 = new Swiper(".mySwiper_type1_3", {
  loop: false,
  thumbs: {
      swiper: swiper,
  },
});





