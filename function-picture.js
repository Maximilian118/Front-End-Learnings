function setup() {
  createCanvas(800, 800);
  noLoop()
}

function draw() {
  background(50, 130, 200);
  stars();
  moon();
  hills(0, 800, 900, 600, 120, 210, 120);
  hills(800, 800, 900, 800, 130, 200, 130);
  grass();
}

function stars() {
  for (let i = 0; i < 200; i++) {
    let x = getRandomInt(0, width)
    let y = getRandomInt(0, height)
    
    stroke(255);
      line(x, y, x+10, y+10);
      line(x, y+10, x+10, y);
      line(x-2, y+5, x+12, y+5);
      line(x+5, y-2, x+5, y+12);
  }
}

function moon() {
  stroke(255);
  fill(255);
  ellipse(100, 100, 150);
  fill(240, 240, 240);
  ellipse(90, 90, 120, 110);
  fill(200, 200, 200);
  ellipse(70, 80, 20, 40);
  fill(240, 240, 240);
  ellipse(120, 100, 30, 20);
  fill(220, 220, 220);
  ellipse(100, 130, 40, 50);
  fill(210, 210, 210);
  ellipse(140, 80, 40, 40);
}

function hills(x, y, diameterX, diameterY, r, g, b) {
  strokeWeight(1);
  stroke(0);
  fill(r, g, b);
  ellipse(x, y, diameterX, diameterY);
}

function grass() {
  stroke(0, 240, 0);
  strokeWeight(2);
  for (var swoosh = 0; swoosh <= width; swoosh += 2) {
    line(swoosh, 800, swoosh + random(10), 770 + random(15));
  }
  for (swoosh; swoosh <= width; swoosh += 2) {
    line(swoosh, 800, swoosh + random(-10), 770 + random(15));
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
