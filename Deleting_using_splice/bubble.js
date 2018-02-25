function Bubble(x, y) {
    this.x = x;
    this.y = y;
    this.lifespan = 255;
    this.col = color(255, 100);
    this.display = function () {
        stroke(255);
        fill(this.lifespan);
        ellipse(this.x, this.y, 48, 48);
    }
    this.update = function () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        this.lifespan--;
    }
    this.isFinished = function () {
        if (this.lifespan < 0) {
            return true;
        }
        else {
            return false;
        }
    }
}