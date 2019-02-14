let bubble;

function setup() {
  createCanvas(800, 800);
  bubble = new Bubble();
  print(bubble.x, bubble.y);   // bubble instance / object
}

function draw () {
  background(0);
  bubble.move();
  bubble.show();
}

class Bubble {           // bubble template
  constructor() {        // bubble data
  this.x = 200;
  this.y = 150;
  }
  move() {               // bubble functionality
  this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);
  }
  show()  {
    stroke(255);
    strokeWeight(4);
    noFill(0);
    ellipse(this.x, this.y, 20, 20)
  }
}