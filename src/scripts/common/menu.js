function menu() {
    const linkMob = document.querySelectorAll('.menu__link--mobile');
    const subListMob = document.querySelectorAll('.menu__sublist--mobile');

    for (let i = 0; i < linkMob.length; i++) {
        linkMob[i].setAttribute('data-id', 'mobile' + i );

        linkMob[i].addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
            const elem = target.getAttribute('data-id');
            const active = document.getElementById(elem);
            const up = target.firstChild.nextSibling;
            const down = target.firstChild.nextSibling.nextSibling;
            up.classList.toggle('hide');
            down.classList.toggle('hide');
            active.classList.toggle('sublist--mobile--visible');
        });
    }
    for (let i = 0; i < subListMob.length; i++) {
        subListMob[i].setAttribute('id', 'mobile' + i);
    }
       
}

module.exports = menu;