function Particle(x, y, r, fixed) {
  var options = {
    friction: 0.1,
    restitution: 0.5,
    color: [random(255, 0), random(255, 0), random(255, 0)],
    angle: random(PI),
    isStatic: fixed
  }
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.isOffScreen = function() {
    var pos = this.body.position;
    return (pos.y > height + 100);
  }

  this.removeFromWorld = function() {
    World.remove(world, this.body);
  }

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill(options.color);
    noStroke();
    ellipse(0, 0, this.r * 2);
    strokeWeight(1);
    stroke(0);
    line(0, 0, this.r, 0)
    pop();
  }
}