let theta = 0;
let r = 0;
const spin = 0.1;
const grow = 0.1;

function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    colorMode(HSB);
    let hu = map(theta, 0, 360, 0, 255);
    let c = color(hu, 255, 255, 255);
    //console.log(hu);
    translate(width / 2, height / 2);
    theta += spin; //theta++;
    r += grow;
    var x = r * cos(theta);
    var y = r * sin(theta);
    fill(c);
    ellipse(x, y, 5, 5);
}