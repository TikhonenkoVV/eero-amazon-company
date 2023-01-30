(() => {
    const mobileMenu = document.querySelector('.header__navigation-wrapper');
    const openMenuBtn = document.querySelector('.header__mobile-menu');

    const toggleMenu = () => {
        const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        openMenuBtn.classList.toggle('is-open');
        mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        openMenuBtn.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();
