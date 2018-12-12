var spots = [];
var num;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSpot(1000);

}

function draw() {
  background(255, 123, 123);
  updateSpots();

}

function createSpot(num) {
  for (var i = 0; i <= num - 1; i++) {
    var spot = {
      alpha: random(20, 255),
      x: random(width),
      y: random(height),
      r: random(5, 15),
      velx: random(-5, 5),
      vely: random(-5, 5)
    }
    spots.push(spot);
    console.log(spots[i]);


  }
}

function updateSpots() {
  for (var i = 0; i <= spots.length - 1; i++) {
    if (spots[i].x <= 0 || spots[i].x >= width) {
      spots[i].velx *= -1;
    }

    if (spots[i].y <= 0 || spots[i].y >= height) {
      spots[i].vely *= -1;
    }

    spots[i].x = spots[i].x + spots[i].velx;
    spots[i].y = spots[i].y + spots[i].vely;
    noStroke();
    fill(255, spots[i].alpha);
    ellipse(spots[i].x, spots[i].y, spots[i].r, spots[i].r);

  }
}