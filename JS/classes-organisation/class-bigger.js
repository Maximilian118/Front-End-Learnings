class Bigger {
  constructor(x, y, d, r, g, b) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  showbig() {
    stroke(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.d)
  }
  movebig() {
    this.x++;
    this.y++;
  }
}