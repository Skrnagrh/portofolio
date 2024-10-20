// Swiper Work Experience
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 0,
    centerSlide: true,
    loop: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicsBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      520: {
        slidesPerView: 1.03,
      },
      950: {
        slidesPerView: 4,
      },
    },
  });

//  Swiper  Portofolio 
var swiper1 = new Swiper(".slide-content1", {
    slidesPerView: 1,
    spaceBetween: 0,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
      dynamicsBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.02,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 4,
      },
    },
  });