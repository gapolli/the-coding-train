var nums = [100, 25, 46, 72];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    for (var i = 0; i < 4; i++) {
        ellipse(i * 100 + 100, 200, nums[i], nums[i])
    }
}