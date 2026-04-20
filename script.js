
// add images to the carousel
function createCarousel() {
    let carouselObj = document.getElementById("slides");
    let numSS = 6;

    for (let i = 1; i <= numSS; i++) {
        const slideDiv = document.createElement("div");
        slideDiv.className = "slide";

        const img = document.createElement("img");

        img.src =  `media/clerkship_screenshots/clerkship_ss${i}.png`;
        img.alt = `Image ${i}`;
        slideDiv.appendChild(img);
        carouselObj.appendChild(slideDiv);
    }
}

createCarousel();

const carousel = document.querySelector("#carousel");
const slides = document.querySelector("#slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let slideElems = document.querySelectorAll(".slide");
let idx = 1;
let slideId;
const interval = 3000;


// refresh slide slements
const getSlides = () => document.querySelectorAll(".slide");

// to make it seem infinite, clone first and last imgs
const firstClone = slideElems[0].cloneNode(true);
firstClone.id = 'firstClone';

const lastClone = slideElems[slideElems.length - 1].cloneNode(true);
lastClone.id = 'lastClone';

slides.appendChild(firstClone);
slides.prepend(lastClone);
