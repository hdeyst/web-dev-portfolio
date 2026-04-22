const fishWidth = 100;
const fishHeight = 25;
const canvasW = 800;
const canvasH = 300;

let x = 0;
let x2 = 0;

let randY = 0;
let randY2 = 0;

let swimming = false;
let swim2 = false;

let currFish;
let secondFish;

let fishies = [];
for (let i = 0; i < 6; i++) {
    let f = new Image();
    fishies.push(f);
}
// ctx lets us use canvas objects for our animations
const ctx = document.getElementById("animation").getContext("2d");

function init() {
    for (let i = 0; i < 6; i++) {
        fishies[i].src = `media/fish/fish${i+1}.png`;
    }
    window.requestAnimationFrame(draw);
}

function moveOne(f, xpos, ypos, idx) {
    ctx.drawImage(f, xpos, ypos, fishWidth, fishHeight);
    if (xpos > canvasW + fishWidth) {
        if (idx === 1) {
            swimming = false;
        } else {
            swim2 = false;
        }
    }
}

function draw() {
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, canvasW, canvasH); // clear canvas
    ctx.fillStyle = "rgb(0 0 0 / 20%)";
    ctx.strokeStyle = "rgb(0 153 255 / 40%)";

    if (!swimming) {
        // pick new fish to draw
        let idx = Math.floor(Math.random() * 6);
        currFish = fishies[idx];
        // random y placement
        randY = Math.floor(Math.random() * (canvasH - fishHeight*2));
        swimming = true;
        x = -fishWidth;
    }
    moveOne(currFish, x, randY, idx=1);
    x += 1;


    if (!swim2) {
        // pick new fish to draw
        let idx = Math.floor(Math.random() * 6);
        secondFish = fishies[idx];
        // random y placement
        randY2 = Math.floor(Math.random() * (canvasH - fishHeight*2));
        swim2 = true;
        x2 = -fishWidth;
    }
    moveOne(secondFish, x2, randY2, idx=2);
    x2 += 2;

    ctx.save();
    ctx.restore();    
    window.requestAnimationFrame(draw);
}

init();