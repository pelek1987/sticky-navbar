const navbarContainer = document.querySelector("header.navbar");
const navbarIcon = document.querySelector(".navbar__icon i");
const navbarMenu = document.querySelector(".navbar__menu ul");

const navbarPositionFromTop = navbarContainer.offsetTop;

const handleScroll = () => {
    const scrollValue = window.scrollY;
    const isNavbarSticky = scrollValue - navbarPositionFromTop >= navbarPositionFromTop;
    if(isNavbarSticky) {
        navbarContainer.classList.add("js-sticky");
    } else {
        navbarContainer.classList.remove("js-sticky");
    }
}

const toggleNavbarMenu = () => {
    navbarMenu.classList.toggle("js-visible");
    navbarIcon.classList.toggle("fa-bars");
    navbarIcon.classList.toggle("fa-times");
}

navbarIcon.addEventListener("click", toggleNavbarMenu);
window.addEventListener("scroll", handleScroll)
