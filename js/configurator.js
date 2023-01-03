(() => {
    const group = document.querySelector('.configurator__group');
    const chkboxS = document.querySelector('.configurator__checkbox--smaller');
    const chkboxM = document.querySelector('.configurator__checkbox--medium');
    const chkboxL = document.querySelector('.configurator__checkbox--larger');
    const imgBgr = document.querySelector('.configurator__img');
    let pathA = './img/';
    var srcA = imgBgr.src;
    var srcB = '';
    var srcC = '';
    var srcD = '';

    chkboxS.addEventListener('change', event => {
        imgBgr.src = srcB;
        srcA = srcB;
        console.log(srcA);
    });

    chkboxM.addEventListener('change', event => {
        imgBgr.src = srcC;
        srcA = srcC;
        console.log(srcA);
    });

    chkboxL.addEventListener('change', event => {
        imgBgr.src = srcD;
        srcA = srcD;
        console.log(srcA);
    });

    group.addEventListener('mouseover', event => {
        var strA = '';
        var strB = '';
        if (event.target.classList.contains('configurator__label--smaller')) {
            strA = 'home-1.png';
            strB = pathA + strA;
            imgBgr.src = strB;
            srcB = strB;
        } else {
            if (event.target.classList.contains('configurator__label--medium')) {
                strA = 'home-2.png';
                strB = pathA + strA;
                imgBgr.src = strB;
                srcC = strB;
            } else {
                if (event.target.classList.contains('configurator__label--larger')) {
                    strA = 'home-3.png';
                    strB = pathA + strA;
                    imgBgr.src = strB;
                    srcD = strB;
                }
            }
        }
    });

    group.addEventListener('mouseout', event => {
        imgBgr.src = srcA;
    });
})();
