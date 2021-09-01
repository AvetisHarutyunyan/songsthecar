const navSlide = () => {
    const bars = document.querySelector('.mobile_version_bars_icon');
    const nav = document.querySelector('.mobile_version_navbar');

    bars.addEventListener('click', () => {
        nav.classList.toggle('navbar-active');
    });
}

navSlide();