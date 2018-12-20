function hamburger () {
    const btn = document.querySelector('.hamb__btn');
    const header = document.querySelector('.header');
    const menuMobile = document.querySelector('.block__menu--mobile');
    btn.addEventListener('click', (e)=> {
        btn.classList.toggle('hamb__btn--active');
        header.classList.toggle('header-active');
        menuMobile.classList.toggle('menu--mobile--active');

        if (document.querySelector('.sublist--mobile--visible')) {
            const xxx = document.querySelectorAll('.sublist--mobile--visible');
            for (let i = 0; i < xxx.length; i++) {
                xxx[i].classList.remove('sublist--mobile--visible');        
            }
        }
    });
    window.addEventListener("resize", function () {
        
        if (innerWidth > 1024) {
            header.classList.remove('header-active');
            menuMobile.classList.remove('menu--mobile--active');
            btn.classList.remove('hamb__btn--active');
        }
    }, false);
    
}

module.exports = hamburger;