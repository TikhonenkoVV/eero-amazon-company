const anchors = document.querySelectorAll('a[href*="#"]');

Array.from(anchors, el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        const blockID = e.target.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
