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


//Every moment is a fresh beginning.
//  Be happy for this moment. This moment is your life.
// Lighten up, just enjoy life, smile more, laugh more,
var typedText = document.querySelector(".typed-text");
var cursorSpan = document.querySelector(".cursor");

var textArray = [
    "Every moment is a fresh beginning.",
    "Be happy for this moment.",
    "This moment is your life.",
    "Lighten up, just enjoy life",
    "Smile More :)","Laugh More :D"
]
var typingDelay = 200;
var erasingDelay = 100;
var newTextDelay = 4000;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        //erase
        cursorSpan.classList.remove("typing");
        setTimeout(erase, 2000);
    }
}

function erase(){
    if(charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedText.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        //type
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length)
            textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1500);
});





var slideshowImages = document.querySelectorAll(".intro .slideshow-image");
var nextImageDelay = 3000;
var counter = 0;

slideshowImages[counter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage(){
    // slideshowImages[counter].style.opacity = 0;
    slideshowImages[counter].style.zIndex = -2;
    var tempCounter = counter;
    setTimeout(() => {
        slideshowImages[tempCounter].style.opacity = 0;
    }, 1000);
    counter = (counter + 1) % slideshowImages.length;
    slideshowImages[counter].style.opacity = 1;
    slideshowImages[counter].style.zIndex = -1;
}

