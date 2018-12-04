
function Ship() {
  this.x = width/2;
  this.xdir = 0;
  this.img = loadImage("Space-invaders-ship.jpg");

  this.show = function() {
    stroke(0);
    image(this.img,this.x, height-50, 60, 60);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}
