(() => {
    const refs = {
        inputsGroups: document.querySelectorAll('.configurator__group'),
        nextBtn: document.querySelector('.configurator__btn--next'),
        prevBtn: document.querySelector('.configurator__btn--preview'),
        configuratorImg: document.querySelector('.configurator__img'),
        span: document.querySelectorAll('.configurator__caption'),
        pagination: document.querySelectorAll('.configurator__item'),
    };

    let pageCounter = 0;
    let path = './img/selection/';

    const controlsData = {
        labels: {
            home: ['home-s', 'home-m', 'home-l'],
            gadjets: ['gadjets-s', 'gadjets-m', 'gadjets-l'],
            speed: ['speed-s', 'speed-m', 'speed-l'],
            multiple: ['multiple-yes', 'multiple-no'],
        },
        str: {
            home: ['I have a', 'home'],
            gadjets: ['My home has', 'connected devices'],
            speed: ['I need support for', 'speed'],
            multiple: ['I', 'an ethernet connection in multiple rooms'],
        },
        srcSet: {
            home: ['home-s.svg', 'home-m.svg', 'home-l.svg'],
            gadjets: ['gadjets-s.svg', 'gadjets-m.svg', 'gadjets-l.svg'],
            speed: ['speed-s.svg', 'speed-m.svg', 'speed-l.svg'],
            multiple: ['multiple-yes.svg', 'multiple-no.svg'],
            default: ['home.svg', 'gadjets.svg', 'speed.svg', 'multiple.svg'],
        },
    };

    const pageData = currGroup => {
        refs.configuratorImg.src = path + controlsData.srcSet.default[pageCounter];
        const curStr = controlsData.str[currGroup.id];
        refs.span.forEach((e, index) => (e.textContent = curStr[index]));
        currGroup.classList.remove('visually-hidden');
        const IsCurPageActive = currGroup.getAttribute('aria-expanded') === 'true' ? true : false;
        if (!IsCurPageActive ? (refs.nextBtn.disabled = true) : (refs.nextBtn.disabled = false));
        changePages();
        refs.pagination.forEach(el => {
            if (el.classList.contains('current')) {
                el.classList.remove('current');
            }
        });
        const currPagination = refs.pagination[pageCounter];
        if (!currPagination.classList.contains('current')) {
            currPagination.classList.add('current');
        }
        if (!currPagination.classList.contains('clickabled')) {
            currPagination.classList.add('clickabled');
        }
        if (!currPagination.firstElementChild.classList.contains('used')) {
            currPagination.firstElementChild.classList.add('used');
        }
    };

    const changePages = () => {
        if (
            pageCounter === 3
                ? (refs.nextBtn.textContent = 'show result')
                : (refs.nextBtn.textContent = 'next')
        );
        if (pageCounter === 0) {
            if (!refs.prevBtn.classList.contains('visually-hidden')) {
                refs.prevBtn.classList.add('visually-hidden');
            }
        }
        if (pageCounter > 0) {
            if (refs.prevBtn.classList.contains('visually-hidden')) {
                refs.prevBtn.classList.remove('visually-hidden');
            }
        }
    };

    const onNextBtnClick = () => {
        if (pageCounter === 3) {
            return;
        }
        pageCounter += 1;
        refs.inputsGroups[pageCounter - 1].classList.add('visually-hidden');
        const currGroup = refs.inputsGroups[pageCounter];
        pageData(currGroup);
        changePages();
    };

    const onPrevBtnClick = event => {
        pageCounter -= 1;
        refs.inputsGroups[pageCounter + 1].classList.add('visually-hidden');
        const currGroup = refs.inputsGroups[pageCounter];
        pageData(currGroup);
        changePages();
    };

    const onLabelClick = e => {
        if (e.target.tagName !== 'LABEL') {
            return;
        }
        const elements = e.currentTarget.querySelectorAll('.configurator__label');
        elements.forEach(el => {
            if (el.classList.contains('configurator__label--current')) {
                el.classList.remove('configurator__label--current');
            }
        });
        e.target.classList.add('configurator__label--current');
        if (e.currentTarget.ariaExpanded === 'false') {
            e.currentTarget.ariaExpanded = 'true';
        }
        refs.nextBtn.disabled = false;
        const currTargetIndex = Object.keys(controlsData.labels).indexOf(e.currentTarget.id);
        const indexImg = controlsData.labels[e.currentTarget.id].indexOf(e.target.id);
        const currTargetImg = controlsData.srcSet[e.currentTarget.id][indexImg];
        controlsData.srcSet.default.splice(currTargetIndex, 1, currTargetImg);
    };

    const onLabelMouseOver = e => {
        if (e.target.tagName !== 'LABEL') {
            return;
        }
        const indexImg = controlsData.labels[e.currentTarget.id].indexOf(e.target.id);
        const currTargetImg = path + controlsData.srcSet[e.currentTarget.id][indexImg];
        refs.configuratorImg.src = currTargetImg;
    };

    const onLabelMouseOut = e => {
        if (e.target.tagName !== 'LABEL') {
            return;
        }
        const currTargetIndex = Object.keys(controlsData.labels).indexOf(e.currentTarget.id);
        const currTargetImg = path + controlsData.srcSet.default[currTargetIndex];
        refs.configuratorImg.src = currTargetImg;
    };

    const onPaginationClick = e => {
        if (!e.currentTarget.classList.contains('clickabled')) {
            return;
        }
        const index = Number(e.currentTarget.textContent) - 1;
        pageCounter = index;
        refs.inputsGroups.forEach(el => {
            if (!el.classList.contains('visually-hidden')) {
                el.classList.add('visually-hidden');
            }
        });
        const currGroup = refs.inputsGroups[index];
        pageData(currGroup);
        changePages();
    };

    refs.nextBtn.addEventListener('click', onNextBtnClick);

    refs.prevBtn.addEventListener('click', onPrevBtnClick);

    Array.from(refs.inputsGroups, group => {
        group.addEventListener('click', onLabelClick);
        group.addEventListener('mouseover', onLabelMouseOver);
        group.addEventListener('mouseout', onLabelMouseOut);
    });

    Array.from(refs.pagination, el => el.addEventListener('click', onPaginationClick));
})();
