var bluecircle = {
  x: 400,
  y: 400
};

var whitecircle = {
  x: 250,
  y: 250
};

var redcircle = {
  x: 100,
  y: 100
};

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255, 255, 255);
  fill(0, 0, 255);
  ellipse(bluecircle.x, bluecircle.y, 400, 400);
  fill(255, 255, 255);
  ellipse(400, 400, whitecircle.x, whitecircle.y);
  fill(255, 0, 0);
  ellipse(400, 400, redcircle.x, redcircle.y);
}
