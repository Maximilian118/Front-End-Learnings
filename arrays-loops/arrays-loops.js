var array = [234, 344, 45, 30, 346, 4, 43, 345, 23, 46, 344]
var words = ["no", "yes", "maybe", "so", "unimaginative" ]

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  for (let i = 0; i < 8; i++) {
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(i * 100 + 100, 400, array[i], array[i])
  }
}