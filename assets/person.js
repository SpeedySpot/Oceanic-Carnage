class Person {
  constructor() {
    this.health = 5;
    this.angle = 0;
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 10;
    this.inv = 0;
  }

}
Person.prototype.draw = function() {
  if (this.health === 5) {
    image(health5, -40, 0);
  } else if (this.health === 4) {
    image(health4, -40, 0);
  } else if (this.health === 3) {
    image(health3, -40, 0);
  } else if (this.health === 2) {
    image(health2, -40, 0);
  } else if (this.health === 1) {
    image(health1, -40, 0);
  } else if (this.health === 0) {
    lose();
  }
  push();
  translate(this.position.x, this.position.y);
  this.angle = atan2(mouseY - this.position.y, mouseX - this.position.x);
  rotate(this.angle);
  fill(255, 255, 255);
  //rect(-30, -10, 60, 20);
  image(fish, -25, -12);
  pop();
  fill(0, 0, 0);
  //ellipse(this.position.x, this.position.y, 20);
  if (mouseIsPressed & !collidePointCircle(mouseX, mouseY, this.position.x, this.position.y, 20)) {
    if (mouseButton === LEFT) {
      var mouse = createVector(mouseX, mouseY);
      this.acceleration = p5.Vector.sub(mouse, this.position);
      this.acceleration.setMag(50);
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
      this.position.add(this.velocity);
      this.position.x = constrain(this.position.x, 0, 600)
      this.position.y = constrain(this.position.y, 0, 400)
    }
  }
}