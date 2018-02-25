var r = 0;
var b = 255;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    r = map(mouseX, 600, 400, 0, 255);
    b = map(mouseX, 600, 400, 255, 0);
    background(r, 0, b);
    fill(250, 118, 222);
    ellipse(mouseX, 200, 64, 64);
}