var spot = {
    x: 0
    , y: 0
};
var col = {
    r: 255
    , g: 0
    , b: 0
};

function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    spot.x = random(0, width);
    spot.y = random(0, height);
    col.r = random(100, 255);
    col.g = random(0, 80);
    col.b = random(100, 190);
    fill(col.r, col.g, col.b, 100);
    ellipse(spot.x, spot.y, 24, 24);
    noStroke();
}