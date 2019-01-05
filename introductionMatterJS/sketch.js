// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
var engine;
var world;
var circles = [];
var boundaries = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // create an engine
  engine = Engine.create();
  world = engine.world;

  // create the ground
  boundaries.push(new Boundary(-100 + width / 2, 400, width * 0.6, 20, 0.3));
  boundaries.push(new Boundary(100 + width / 2, 200, width / 2, 20, -0.3));

}

function mouseDragged() {
  // add a circle instace to circles array
  circles.push(new Circle(mouseX, mouseY, random(5, 20), 200));
  console.log(circles.length, world.bodies.length);
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].isOffScreen()) {
      circles[i].removeFromWorld();
      circles.splice(i, 1);
      i--;
    }
  }
  // show the ground
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }

}