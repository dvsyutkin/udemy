function btnUp() {
    // кнопка на вверх
    let btnTop = document.querySelector('.btn-top');
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop.toFixed();
        if (scrollTop >= 450) {
            btnTop.style.opacity = 1;
        } else {
            btnTop.style.opacity = 0;
        }
    });

    btnTop.addEventListener('click', () => {

        let top = setInterval(() => {
            if (document.documentElement.scrollTop >= 10) {
                document.documentElement.scrollTop -= 30;
            } else {
                clearInterval(top);
            }
        }, 1);
    });
}

module.exports = btnUp;