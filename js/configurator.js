'use strict';
(() => {
    const $d = document;
    const pages = $d.querySelectorAll('.configurator__page');
    const pageHome = $d.querySelector('.configurator__home');
    const arrHome = pageHome.querySelectorAll('.configurator__label');
    const pageGadjets = $d.querySelector('.configurator__gadjets');
    const arrGadjets = pageGadjets.querySelectorAll('.configurator__label');
    const pageSpeed = $d.querySelector('.configurator__speed');
    const arrSpeed = pageSpeed.querySelectorAll('.configurator__label');
    const pageMultiple = $d.querySelector('.configurator__multiple');
    const arrMultiple = pageMultiple.querySelectorAll('.configurator__label');

    const nextBtn = $d.querySelector('.configurator__btn--next');
    const prevBtn = $d.querySelector('.configurator__btn--preview');
    const configuratorCounter = $d.documentElement.querySelector('.configurator__counter');
    const configuratorItem = configuratorCounter.querySelectorAll('.configurator__item');

    let pageCounter = 0;
    let curPage = pageHome;
    let nextPage;
    let prevPage;
    let IsCurPageActive;

    function setCurrentDots(num) {
        configuratorItem.forEach(el => {
            el.classList.remove('configurator__item--current');
        });
        configuratorCounter.children[num].classList.add(
            'configurator__item--current',
            'configurator__item--clickabled'
        );
    }

    function pageParam(num) {
        pages.forEach(el => {
            el.classList.add('visually-hidden');
        });
        curPage = $d.querySelector(`.configurator__${strFoo(num)}`);
        curPage.classList.remove('visually-hidden');
        nextPage = num === 0 ? undefined : $d.querySelector(`.configurator__${strFoo(num + 1)}`);
        prevPage = num === 3 ? undefined : $d.querySelector(`.configurator__${strFoo(num - 1)}`);
        IsCurPageActive = curPage.getAttribute('aria-expanded') === 'true' ? true : false;
        if (!IsCurPageActive) {
            nextBtn.classList.add('disabled');
        } else nextBtn.classList.remove('disabled');
        if (num === 0) {
            prevBtn.classList.add('visually-hidden');
        } else prevBtn.classList.remove('visually-hidden');
        setCurrentDots(num);
        nextBtn.innerHTML = num === 3 ? 'show result' : 'next';
    }

    Array.from(configuratorItem, el => {
        el.addEventListener('click', element => {
            if (element.target.tagName !== 'SPAN') return false;
            const contains = element.currentTarget.classList.contains(
                'configurator__item--clickabled'
            );
            if (contains) {
                const num = Number(element.target.innerHTML) - 1;
                if (num !== pageCounter) {
                    pageCounter = num;
                    pageParam(pageCounter);
                }
            }
        });
    });

    function strFoo(num) {
        let pageClass;
        switch (num) {
            case 1:
                pageClass = 'gadjets';
                break;
            case 2:
                pageClass = 'speed';
                break;
            case 3:
                pageClass = 'multiple';
                break;
            default:
                pageClass = 'home';
                break;
        }
        return pageClass;
    }

    const arrayPages = function (arr) {
        let str;
        const curPage = arr[0].parentElement.parentElement.parentElement;
        const curImg = curPage.querySelector('.configurator__img');
        let defaultSr = curImg.src;
        Array.from(arr, lbl => {
            lbl.addEventListener('mouseover', event => {
                let lblId = event.target.getAttribute('id');
                str = `./img/selection/${lblId}.svg`;
                curImg.src = str;
            });
            lbl.addEventListener('click', element => {
                arr.forEach(el => {
                    el.classList.remove('configurator__label--current');
                });
                element.target.classList.add('configurator__label--current');
                curImg.src = str;
                defaultSr = str;
                nextBtn.classList.remove('disabled');
                curPage.setAttribute('aria-expanded', true);
            });
            lbl.addEventListener('mouseout', event => {
                curImg.src = defaultSr;
            });
        });
    };

    arrayPages(arrHome);
    arrayPages(arrGadjets);
    arrayPages(arrSpeed);
    arrayPages(arrMultiple);

    nextBtn.addEventListener('click', next => {
        const IsDisabled = nextBtn.classList.contains('disabled');
        if (!IsDisabled && pageCounter < 3) {
            pageCounter += 1;
            pageParam(pageCounter);
            configuratorCounter.children[pageCounter].children[0].classList.add(
                'configurator__dots--used'
            );
        }
    });

    prevBtn.addEventListener('click', preview => {
        if (pageCounter > 0) {
            pageCounter -= 1;
            pageParam(pageCounter);
        }
    });
})();
