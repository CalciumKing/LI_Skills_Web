let slideIndex = 1;
const topButton = document.getElementById("toTopButton");

// function that runs automatically
!function () {
    showSlides(slideIndex);
    // scrollProgressBar();

    // if user is at top of page, hide to top button, otherwise, show it
    topButton.style.opacity = 0;
    document.addEventListener("scroll", () => {
        if (window.scrollY > 0)
            topButton.style.opacity = 1;
        else
            topButton.style.opacity = 0;
    });
}();

// close to working but not quite, will function properly given more time
function scrollProgressBar() {
    let getTabHeight = () => { return document.height - window.height; };
    let getFromTop = () => { return window.scrollY; };
    let getWidth = () => { return ((getFromTop() / getTabHeight()) * 100) + "%"; };
    document.addEventListener("scroll", () => document.getElementById("#progressBar").style.width = getWidth());
}

function plusSlides(n) {
    // clearTimeout(showSlides);
    showSlides(slideIndex += n);
}

function setSlide(n) {
    showSlides(slideIndex = n);
}

// with more time and internet, timeout will work and slideshow will change slides automatically
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // setTimeout(() => showSlides(n + 1), 2000);
}