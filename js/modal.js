(() => {
    const refs = {
        openBtn: document.querySelectorAll('.products__btn'),
        closeBtnModal: document.querySelector('.modal__btn-close'),
        submitBtn: document.querySelector('.modal__btn'),
        posBtn: document.querySelectorAll('.modal__field'),
        modal: document.querySelector('.backdrop'),
    };

    const toggle = el => {
        const isModalOpen = refs.modal.getAttribute('aria-modal') === 'true' || false;
        refs.modal.setAttribute('aria-modal', !isModalOpen);
        refs.modal.classList.toggle('is-hidden');
        const scrollLockMethod = !isModalOpen ? 'disableBodyScroll' : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    Array.from(refs.openBtn, el => el.addEventListener('click', toggle));

    refs.closeBtnModal.addEventListener('click', toggle);
    refs.submitBtn.addEventListener('click', toggle);

    Array.from(refs.posBtn, el => {
        el.addEventListener('click', el => {
            refs.posBtn.forEach(el => el.classList.remove('current'));
            el.currentTarget.classList.add('current');
        });
    });
})();
