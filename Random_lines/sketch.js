var spot1 = {
    x: 0
    , y: 0
};
var spot2 = {
    x: 100
    , y: 50
}
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
    spot1.x = random(0, width);
    spot1.y = random(0, height);
    spot2.x = random(0, width);
    spot2.y = random(0, height);
    col.r = random(100, 255);
    col.g = random(0, 80);
    col.b = random(100, 190);
    line(spot1.x, spot1.y, spot2.x, spot2.y);
    stroke(col.r, col.g, col.b);
}