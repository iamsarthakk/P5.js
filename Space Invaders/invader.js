
function Invader(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.img = loadImage("invader.jpg");

  this.xdir = 1;

  this.grow = function() {
    this.r = this.r + 2;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    noStroke();
    image(this.img,this.x, this.y, this.r*2, this.r*2);
  }

}
