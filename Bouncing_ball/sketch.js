var x = 0;
var y = 200;
var speedX = 3;
var speedY = 3;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x, y, 50, 50);
    if (x > width - 25) {
        speedX = -3;
    }
    else if (x < 25) {
        speedX = 3;
    }
    if (y > height - 25) {
        speedY = -3;
    }
    else if (y < 25) {
        speedY = 3;
    }
    x = x + speedX;
    y = y + speedY;
}