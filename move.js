var move = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(move, 100, 200);
  ellipse(move, 750, 100, 100);

  move = move + 1;
}
