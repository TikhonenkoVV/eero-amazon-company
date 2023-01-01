let swiper = new Swiper('.swiper-container-smart', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
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

swiper.on('slideChange', function () {
    const elChange = document.documentElement.querySelector('.smart__list');
    const iconChange = document.documentElement.querySelectorAll('.smart__icon');

    iconChange.forEach(el => {
        el.classList.remove('smart__icon--current');
    });

    elChange.children[swiper.realIndex].children[0].classList.add('smart__icon--current');
});
