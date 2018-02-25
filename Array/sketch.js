var nums = [100, 25, 46, 72];
var words = ["rainbow", "heart", "purple", "friendship", "love"];
var num = 23;
var index = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    ellipse(100, 200, num, num);
    ellipse(200, 200, nums[2], nums[2]);
    fill(255);
    textSize(32);
    text(words[index], 12, 150);
}

function mousePressed() {
    index = index + 1;
    if (index == words.length) {
        index = 0;
    }
}