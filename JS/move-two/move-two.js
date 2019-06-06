var x = 100;
var move = 4;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  noFill();
  ellipse(x, 300, 100);
  x = x + move;
  if (x > 500 || x < 100) {
    move = move * -1;
  }
}