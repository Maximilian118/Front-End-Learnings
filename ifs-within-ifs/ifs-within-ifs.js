var x = 100;
var y = 100;
var movex = 3;
var movey = 3;
var but = false;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220, 200, 200);
  if (mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 500) {
    if (mouseIsPressed) {
      background(190, 190, 240);
    }
    fill(255, 0, 0);
  } else {
    fill(255, 255, 255);
  }
  strokeWeight(4);
  rect(300, 300, 200, 200);
  if (x > 700 || x < 100) {
    movex = movex * -1;
  }
  ellipse(x, y, 150);
  x = x + movex;

  if (but) {
    if (x > 700 || x < 100) {
      y = y + movey;
      movex = 0;
      if (y > 700 || y < 100) {
        movey = movey * -1;
      }
    }
  }
}

function mousePressed() {
  if (mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 500) {
    but = !but;
  }
}
