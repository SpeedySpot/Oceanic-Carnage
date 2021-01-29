function Clock(config) {
  this.clock = config.clock; //Change For How Long You Want The Delay To Be
  this.timeSave = millis();
  this.start = config.start; //Put In Your Desired Code
}

Clock.prototype.tick = function() {
  if (millis() > this.timeSave + this.clock) {
    this.start();
    this.timeSave = millis();
  }
}