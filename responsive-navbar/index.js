const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // TOGGLE NAV-LINKS CLASS
        nav.classList.toggle('nav-active');

        // BURGER ANIMATION
        burger.classList.toggle('toggle');
    });
}

navSlide();