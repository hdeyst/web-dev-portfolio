// add images to the carousel
function createCarousel() {
    let carouselObj = document.getElementById("slides");
    let numSS = 6;

    for (let i = 1; i <= numSS; i++) {

        const img = document.createElement("img");
        img.className = "slide";

        img.src =  `media/clerkship_screenshots/clerkship_ss${i}.png`;
        img.alt = `Image ${i}`;
        carouselObj.appendChild(img);
    }
}

createCarousel();

let slideElems = document.querySelectorAll(".slide");
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;

    if (n > slideElems.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slideElems.length;
    }

    for (i = 0; i < slideElems.length; i++) {
        slideElems[i].style.display = "none";
    }

    slideElems[slideIndex-1].style.display = "block";
    slideElems[slideIndex-1].style.margin = "auto";
}