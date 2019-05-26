var s;
var scl = 20;
var score = 0;
var food;
var p;
var eat;
var change;

function preload(){
    eat = loadSound("eat.mp3");
    change = loadSound("changedir.mp3");
}

function setup() {
  p = createP("Score:"+score);
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl-1);
  var rows = floor(height/scl-1);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}


function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
      eat.play();
      score++;
  }
    
  s.death(score);
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
    change.play();
}
