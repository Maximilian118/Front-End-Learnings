var x = 110;
var y = 800;
var move = 3;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220, 200, 200);
  noFill();
  strokeWeight(8);
  y = random(390, 400);

  if (mouseY < 400) {
    fill(255, 0, 0);
    background(0);
  }

  if (x > 690) {
    move = -3;
  }

  if (x < 110) {
    move = 3;
  }

  ellipse(x, y, 200, 200);
  x = x + move;

  if (mouseIsPressed) {
    background(255, 255, 255);
  }
}
