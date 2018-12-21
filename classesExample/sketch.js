let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  let bubble = new Bubble(mouseX, mouseY);
  bubbles.push(bubble);
}

function draw() {
  background("rgb(64,0,145)");
  for (let bubble of bubbles) {
    bubble.move();
    bubble.bounce();
    bubble.show();
  }
}