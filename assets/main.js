var logo = {
    showLogo: (delay = 1000) => {
        setTimeout(() => {
            document.querySelector("svg.logo").style.opacity = 1
        })
    },
    closeEye: () => {
        anime({
            targets: '.logo #R-eye',
            d: 'M169.784,126.658s-14.729,3.4-18.933,3.988S162.87,131.078,169.784,126.658Z',
        });
        anime({
            targets: '.logo #L-eye',
            d: 'M65,127s15.034,3.2,19.325,3.751S72.054,131.16,65,127Z',
        });
    },
    openEye: () => {
        anime({
            targets: '.logo #R-eye',
            d: 'M169.979,119.5s-15.054,7.6-19.3,7.658S162.532,138.4,169.979,119.5Z',
            duration: 1000,
            delay: function (el, i, l) {
                return i * 100;
            },
            endDelay: function (el, i, l) {
                return (l - i) * 100;
            }
        });
        anime({
            targets: '.logo #L-eye',
            d: 'M66.985,119.5s15.054,7.6,19.3,7.657S74.432,138.4,66.985,119.5Z',
            delay: function (el, i, l) {
                return i * 100;
            },
            endDelay: function (el, i, l) {
                return (l - i) * 100;
            }
        });
    },
    hideCrown: () => {
        anime({
            targets: '.logo rect',
            translateY: '50'
        });
    },
    showCrown: () => {
        anime({
            targets: '.logo rect',
            translateY: '0',
            delay: function (el, i, l) {
                return i * 300;
            },
            endDelay: function (el, i, l) {
                return (l - i) * 100;
            }
        });
    },
    growNose: () => {
        anime({
            targets: '.logo #nose',
            scale: '1'
        });
    },
    shrinkNose: () => {
        anime({
            targets: '.logo #nose',
            scale: '0.7'
        });
    },
    blink: (delay = 300) => {
        logo.closeEye();
        setTimeout(() => {
            logo.openEye()
        }, delay)

    },
    sleep: () => {
        logo.closeEye();
        logo.hideCrown();
    },
    wakeUp: () => {
        logo.showCrown();
        logo.openEye();
    },
    startBlinking() {
        setTimeout(() => {
            logo.blink();
            logo.startBlinking();
        }, Math.floor(Math.random() * 5000) + 1000);
    }
}
logo.closeEye();
logo.hideCrown();
logo.showLogo();