function Button(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
    this.colour = config.colour || [255, 255, 255];
}

Button.prototype.draw = function() {
    fill(this.colour[0], this.colour[1], this.colour[2]);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

mouseClicked = function() {
    if (scene === 0) {
    btn1.handleMouseClick();
    btn2.handleMouseClick();
    } 
      if (scene === 3 || scene === 4 || scene === 2) {
    btn3.handleMouseClick();
    } 
};

var btn1 = new Button({
    x: 375,
    y: 140,
    colour: [52, 235, 229],
    label: "Play",
    onClick: function() {
      song.play();
      menu.stop();
      scene = 1;
      player.health = 5;
      player.position.x = width / 2;
      player.position.y = height / 2;
      bad.splice(0);
      clearTimeout();
      startOffset = millis();
      game();
    }
});
var btn2 = new Button({
    x: 375,
    y: 210,
    colour: [52, 235, 229],
    label: "Instructions",
    onClick: function() {
      scene = 2;
    }
});
var btn3 = new Button({
    x: 225,
    y: 300,
    colour: [52, 235, 229],
    label: "Main Menu",
    onClick: function() {
      if (scene === 3) {
        victory.stop();
        menu.play();
      }
      if (scene === 4) {
        gameover.stop();
        menu.play();
      }
      scene = 0;
      
      
      
    }
});
