function setup() {
  createCanvas(800, 800);
  frameRate(30);
}

function draw() {
  background(0);
  fill(255, 255, 255);

  var x = 0;
  while (x <= width) {
    ellipse(x, 200, 50);
    x += 100;
  }

  for (var y = 0; y <= height; y += 100) {
    ellipse(400, y, 50);
  }

  for (var z = 0; z <= width; z += 100) {
    rect(z, z, 50, 50);
  }

  for (var h = 0; h <= width; h += 50) {
    for (var f = 0; f <= height; f += 50) {
      stroke(255);
      strokeWeight(2);
      fill(random(255), 0, random(255));
      ellipse(h, f, 25);
    }
  }
}
