// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;
var engine;
var world;
var particles = [];
var boundaries = [];
var mConstraint;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  // create an engine
  engine = Engine.create();
  world = engine.world;



  var prev = null;
  for (var x = 200; x < 500; x += 40) {
    var fixed = false;
    if (!prev) {
      fixed = true;
    }
    var p = new Particle(x, 100, 15, fixed);
    particles.push(p);
    if (prev) {
      var options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: 40,
        stiffness: 0.4
      }
      var constraint = Constraint.create(options);
      World.add(world, constraint);

    }
    prev = p;
  };

  // create the ground
  boundaries.push(new Boundary(width / 2, height, width, 20, PI));

  var canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  var options = {
    mouse: canvasMouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
  console.log(mConstraint);
}

// function mouseDragged() {
//   // add a particle instace to particles array
//   particles.push(new Circle(mouseX, mouseY, random(5, 20), 200));
//   console.log(particles.length, world.bodies.length);
// }

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
    if (particles[i].isOffScreen()) {
      particles[i].removeFromWorld();
      particles.splice(i, 1);
      i--;
    }
  }
  // show the ground
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  // line(particles[0].body.position.x, particles[0].body.position.y, particles[1].body.position.x, particles[1].body.position.y)
  if (mConstraint.body) {
    var pos = mConstraint.body.position;
    var offset = mConstraint.constraint.pointB;
    var m = mConstraint.mouse.position;
    stroke(0, 255, 0, 200);
    line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
  }
}