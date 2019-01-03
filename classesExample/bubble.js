class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(20, 50);
    this.velx = random(-2, 2);
    this.vely = random(-2, 2);
    this.brightness = "#fff";
    this.status = true;
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