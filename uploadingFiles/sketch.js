let smily;

function preload() {
  smily = loadImage('smily.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER);
  image(smily, mouseX, mouseY, 100, 100);
}