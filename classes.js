let bubble;
let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let bubble6;
let bubble7;
let bubble8;
let bubble9;
let bubbler;
let bubbleg;
let bubbleb;
let bigger
let _x = 0;     //why do these variables not work locally?
let _y = 0;
let _x_ = 0;
let _y_ = 0;
let move2 = 1;

function setup() {
  createCanvas(800, 800); 
  bubble = new Bubble(400, 400, 150, 255, 255, 255);
  bubble1 = new Bubble(400, 400, 30, 255, 255, 255); 
  bubble2 = new Bubble(200, 600, 25, 255, 255, 255); 
  bubble3 = new Bubble(600, 200, 26, 255, 255, 255); 
  bubble4 = new Bubble(200, 200, 28, 255, 255, 255); 
  bubble5 = new Bubble(200, 200, 22, 255, 255, 255); 
  bubble6 = new Bubble(600, 600, 22, 255, 255, 255); 
  bubble7 = new Bubble(600, 600, 26, 255, 255, 255);
  bubble8 = new Bubble(200, 600, 30, 255, 255, 255); 
  bubble9 = new Bubble(600, 200, 31, 255, 255, 255);
  bubbler = new Bubble(400, 400, 26, 255, 0, 0);
  bubbleg = new Bubble(400, 400, 30, 0, 255, 0);
  bubbleb = new Bubble(400, 400, 24, 0, 0, 255);
  bigger = new Bigger(400, 400, 200, 0, 255, 0);
}

function draw () {
  background(0);
  biglr(400, 400, 200);
  bigrl(400, 400, 200);
  bigger.showbig();
  bigger.movebig();
  bubble.move();
  bubble.show();
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
  bubble6.move();
  bubble6.show();
  bubble7.move();
  bubble7.show();
  bubble8.move();
  bubble8.show();
  bubble9.move();
  bubble9.show();
  bubbler.move();
  bubbler.show();
  bubbleg.move();
  bubbleg.show();
  bubbleb.move();
  bubbleb.show();
}

class Bubble {           // bubble template
  constructor(x, y, d, r, g, b) {        // bubble paramiters
  this.x = x;
  this.y = y;
  this.d = d;
  this.r = r;
  this.g = g;
  this.b = b;
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
    this.r = this.r +2;
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