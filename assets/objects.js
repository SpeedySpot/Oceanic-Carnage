function Bad(config) {
  this.x = config.x;
  this.y = config.y;
  this.size = config.size;
  this.code = config.code;
  this.id = config.id;
  this.size2 = config.size2;
  this.stage = config.stage;
  this.t = config.t;
}


function badDraw() {
  for (i = 0; i < bad.length; i++) {
    bad[i].draw();
    if (bad[i].y > 500 || bad[i].x > 700 || bad[i].y < -100 || bad[i].x < -100) {
      bad.splice(i, 1);
    }
  }
}

Bad.prototype.draw = function() {
  if (this.id === 1) {
    push()
    fill(0, 0, 0);
    ellipse(this.x, this.y, this.size, this.size)
    this.code();
    if (collideCircleCircle(player.position.x, player.position.y, 20, this.x, this.y, this.size)) {
      this.hurt();
    }
    pop()
  }
  if (this.id === 2) {
    image(bag, this.x, this.y);
    this.code();
    if (collideRectCircle(this.x, this.y, 70, 100, player.position.x, player.position.y, 20)) {
      this.hurt();
    }
  }
  if (this.id === 3) {
    image(hook, this.x - 10, this.y);
    rect(this.x, 0, 10, this.y)
    this.code();
    if (collideRectCircle(this.x, 0, 10, this.y, player.position.x, player.position.y, 20)) {
      this.hurt();
    }
  }
  if (this.id === 4) {
    push();
    noStroke();
    fill(255, 0, 0, this.t);
    rect(this.x, this.y, this.size, this.size2);
    this.code();
    pop()
  }
}

Bad.prototype.hurt = function() {
  if (millis() > player.inv) {
    player.health -= 1;
    player.inv = millis() + 5000;
  }
}