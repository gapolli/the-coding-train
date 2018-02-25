var bubbles = [];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    for (var i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();
        if (bubbles[i].isFinished()) {
            bubbles.splice(i, 1);
        }
    }
}

function mousePressed() {
    var b = new Bubble(mouseX, mouseY);
    bubbles.push(b);
}