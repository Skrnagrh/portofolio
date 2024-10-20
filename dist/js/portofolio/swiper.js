// Swiper Android
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 0,
    // loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
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
        slidesPerView: 2.1,
        },
        520: {
        slidesPerView: 3,
        },
        950: {
        slidesPerView: 5,
        },
    },
});

// Swiper Kereta Api
var swiper1 = new Swiper(".slide-content1", {
    slidesPerView: 1,
    spaceBetween: 0,
    // loop: true,
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
        slidesPerView: 1.1,
        },
        520: {
        slidesPerView: 2,
        },
        950: {
        slidesPerView: 3,
        },
    },
});


// Swiper Perpustakaan
var swiper1 = new Swiper(".slide-content2", {
    slidesPerView: 1,
    spaceBetween: 0,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
        dynamicsBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
        0: {
        slidesPerView: 1.1,
        },
        520: {
        slidesPerView: 2,
        },
        950: {
        slidesPerView: 3,
        },
    },
});