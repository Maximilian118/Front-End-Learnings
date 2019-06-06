class Bubble {           // bubble template
  constructor(x, y, d, r, g, b, i) {        // bubble paramiters
  this.x = x;
  this.y = y;
  this.d = d;
  this.r = r;
  this.g = g;
  this.b = b;
  this.i = i;
  }
  move() {              // bubble functionality
  this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);
  }
  show()  {
    stroke(this.r, this.g, this.b);
    strokeWeight(4);
    noFill(0);
    ellipse(this.x, this.y, this.d)
  }
  grow() {
    this.i = this.i + 200;
  }
}

function biglr(x, y, d) {
  ellipse(x + _x, y + _y, d);
  _x = _x + move2;
  _y = _y + move2;
  if (_x > 250 || _x < -250) {
    if (_y > 250 || _y < -250) {
      move2 = move2 * -1;
    }
  }
}

function bigrl(x, y, d) {
  ellipse(x + _x_, y + _y_, d);
  _x_ = _x_ - move2;
  _y_ = _y_ + move2;
  if (_x_ > 250 || _x_ < -250) {
    if (_y_ > 250 || _y_ < -250) {
      move2 = move2 * -1;
    }
  }
}