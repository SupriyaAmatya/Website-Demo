var navbarToggler = document.querySelector(".navbar-toggler");
var navbarMenu = document.querySelector(".navbar ul")
var navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick(){
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick(){
    if(navbarMenu.classList.contains("open")){
        navbarToggler.click();
    }
}