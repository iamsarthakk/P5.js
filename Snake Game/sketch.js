var s;
var scl = 20;
var score = 0;
var food;
var p;

function setup() {
  p = createP("Score:"+score);
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
      score++;
  }
    if(s.x>=width||s.x<=0||s.y>=height||s.y<=0){
        score = 0;
    }
  s.death();
  s.update();
  s.show();
  p.html("Score:"+score);

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
