function openMenu() {
    const nav = document.querySelector('nav');
    const menu = nav.querySelector('ul');
    const button = document.getElementById('menuButton');

    nav.classList.toggle('menu-active');

    if (nav.classList.contains('menu-active')) {
        menu.classList.add('menu-show');
        menu.classList.remove('menu-hide');
        button.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.remove('menu-show');
        menu.classList.add('menu-hide');
        button.classList.remove('active');
        document.body.style.overflow = '';
    }

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('menu-active'); 
            menu.classList.remove('menu-show');
            menu.classList.add('menu-hide');
            button.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}