(() => {
    const labelMath = document.querySelectorAll('.configurator__label');
    const curConfigurator = document.querySelector('.configurator__controls--home');
    const labelArr = curConfigurator.getElementsByClassName('configurator__label');
    const nextBtn = document.querySelector('.configurator__btn--next');
    const prevBtn = document.querySelector('.configurator__btn--preview');
    const imgBgr = document.querySelector('.configurator__img');
    let pathA = './img/selection/';
    let defaultSrc = imgBgr.src;
    let pageCounter = 0;
    let isDisabled = true;
    let pageClass;

    function strFoo(num) {
        switch (pageCounter) {
            case 0:
                pageClass = 'home';
                break;
            case 1:
                pageClass = 'gadjets';
                break;
            case 2:
                pageClass = 'speed';
                break;
            case 3:
                pageClass = 'buy';
                break;
        }
        return pageClass;
    }

    Array.from(labelArr, lbl => {
        let str;
        lbl.addEventListener('click', element => {
            labelMath.forEach(el => {
                el.classList.remove('configurator__label--current');
            });
            element.target.classList.add('configurator__label--current');
            console.log(str);
            imgBgr.src = str;
            defaultSrc = str;
            nextBtn.classList.remove('disabled');
            isDisabled = false;
        });
        lbl.addEventListener('mouseover', event => {
            str = pathA;
            let lblId = lbl.getAttribute('id');
            str += lblId + '@1x.png';
            imgBgr.src = str;
        });
        lbl.addEventListener('mouseout', event => {
            imgBgr.src = defaultSrc;
            str = '';
        });
    });

    nextBtn.addEventListener('click', next => {
        if (!isDisabled && pageCounter < 3) {
            pageCounter += 1;
            if (pageCounter >= 1) {
                prevBtn.classList.remove('visually-hidden');
                if (pageCounter === 3) {
                    next.target.innerHTML = 'show result';
                } else {
                    next.target.innerHTML = 'next';
                }
            }
            console.log(pageCounter);
            console.log(strFoo(pageCounter));
        }
    });

    prevBtn.addEventListener('click', preview => {
        if (pageCounter > 0) {
            pageCounter -= 1;
            nextBtn.innerHTML = 'next';
            console.log(pageCounter);
        }
        if (pageCounter === 0) {
            preview.target.classList.add('visually-hidden');
            console.log(pageCounter);
        }
    });
})();
