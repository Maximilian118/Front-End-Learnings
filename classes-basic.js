let square;
let squar2;

function setup() {
  createCanvas(800, 800);
  square = new Square(300, 300, 200, 200);
  squar2 = new Square(100, 100, 600, 100);
  println(square.x, square.y);
}

function draw() {
  background(20);
  square.show();
  squar2.show();
}

class Square {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show() {
    fill(0, 100, 0);
    stroke(200);
    rect(this.x, this.y, this.w, this.h);
  }
}