var circle1 = {
  x: 400,
  y: 400
};

var circle2 = {
  x: 250,
  y: 250
};

var circle3 = {
  x: 100,
  y: 100
};

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255, 255, 255);
  circle1.x = random(0, 800);
  circle1.y = random(0, 800);
  fill(0, 0, 255);
  ellipse(circle1.x, circle1.y, 400, 400);
  circle2.x = random(0, 800);
  circle2.y = random(0, 800);
  fill(255, 255, 255);
  ellipse(400, 400, circle2.x, circle2.y);
  circle3.x = random(0, 800);
  circle3.y = random(0, 800);
  fill(255, 0, 0);
  ellipse(400, 400, circle3.x, circle3.y);
}
