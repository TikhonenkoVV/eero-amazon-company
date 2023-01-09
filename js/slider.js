const swiperSmart = new Swiper('.smart__swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.smart__swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletActiveClass: 'smart__box-item--current',
        bulletClass: 'smart__box-item',
    },
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed: 2000,
});

swiperSmart.on('slideChange', function () {
    const elChange = document.documentElement.querySelector('.smart__list');
    const iconChange = document.documentElement.querySelectorAll('.smart__icon');

    iconChange.forEach(el => {
        el.classList.remove('smart__icon--current');
    });

    elChange.children[swiperSmart.realIndex].children[0].classList.add('smart__icon--current');
});

const swiperOffer = new Swiper('.offer__swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.offer__swiper-pagination',
        clickable: true,
        type: 'custom',
        bulletClass: 'offer__link',
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 7000,
    },
    speed: 1200,
});

swiperOffer.on('slideChange', function () {
    const elChange = document.documentElement.querySelector('.offer__swiper-pagination');
    const iconChange = document.documentElement.querySelectorAll('.offer__link');
    console.log(iconChange.length);

    iconChange.forEach(el => {
        el.classList.remove('offer__link--current');
    });

    elChange.children[swiperOffer.realIndex].classList.add('offer__link--current');
});
