class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = random(20, 255);
    this.r = random(5, 15);
    this.velx = random(-5, 5);
    this.vely = random(-5, 5);
  }
  move() {
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;
  }

  bounce() {
    if (this.x <= 0 || this.x >= width) {
      this.velx *= -1;
    }

    if (this.y <= 0 || this.y >= height) {
      this.vely *= -1;
    }
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, this.r, this.r);
  }
}