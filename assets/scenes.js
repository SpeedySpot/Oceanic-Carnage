function scene0() {
  background(84, 215, 222);
  image(logo, 50, 120);
  btn1.draw();
  btn2.draw();
}
function scene2() {
  background(84, 215, 222);
  fill(0, 0, 255);
  textStyle(BOLD);
  text("INSTRUCTIONS", 225, 50);
  textStyle(NORMAL);
  text("Deep under the water lives hundreds of thousands different\nspecies of aquatic life. Human expansion has lead to several \nthreats to this kind of wildlife. These threats include problems \nsuch as plastic pollution, oil pollution, and overfishing. In this \nbullet hell game, you play as a fish and evade these threats.\nThe fish will point towards your mouse. \nHold down your mouse button for the fish to move in the direction \nit is facing. Red will indicate that an attack will appear there. \nAvoid anything oil, plastic, and fishing rods.", 30, 80)
  btn3.draw();
}
function scene3() {
  push();
  textSize(30);
  background(84, 215, 222);
  fill(0, 0, 255);
  textStyle(BOLD);
  text("VICTORY", 205, 50);
  textStyle(NORMAL);
  if (player.health === 5) {
    image(s, 225, 90);
  }
  else if (player.health === 4) {
    image(a, 225, 90);
  }
    else if (player.health === 3) {
    image(b, 225, 90);
  }
    else if (player.health === 2) {
    image(c, 225, 90);
  }
    else if (player.health === 1) {
    image(d, 225, 90);
  }
  btn3.draw();
  pop();
}
function scene4() {
  push();
  textSize(30);
  background(84, 215, 222);
  image(death, 250, 150);
  fill(0, 0, 0);
  rect(290, 0, 10, 150);
  fill(0, 0, 255);
  textStyle(BOLD);
  text("GAME OVER", 205, 50);
  textStyle(NORMAL);
  text("You survived " + survive + " seconds", 125, 80)
  btn3.draw();
  pop();
}
function scene1() {
  //print(millis() - startOffset);
  background(84, 215, 222);
  player.draw();
  badDraw();
  if ((millis() - startOffset) > 0 && (millis() - startOffset) < 25500) {
    clock1.tick();
  }
  if ((millis() - startOffset) > 28000 && (millis() - startOffset) < 39000) {
    clock2.tick();
  }
    if ((millis() - startOffset) > 50000 && (millis() - startOffset) < 62000) {
    clock3.tick();
    clock3b.tick();
  }
      if ((millis() - startOffset) > 66000 && (millis() - startOffset) < 79000) {
    clock4.tick()
  }
        if ((millis() - startOffset) > 82000 && (millis() - startOffset) < 91000) {
    clock4.tick()
        clock4b.tick()
  }
          if ((millis() - startOffset) > 92000 && (millis() - startOffset) < 111000) {
    clock5.tick();
  }
            if ((millis() - startOffset) > 113500 && (millis() - startOffset) < 122500) {
    clock6.tick();
    clock6b.tick();
  }
}
function win() {
  scene = 3;
  song.stop();
  clearTimeout();
  victory.play();
}
function lose() {
  scene = 4;
  survive = round(millis() - startOffset)/1000;
  song.stop();
  clearTimeout();
  gameover.play();
}