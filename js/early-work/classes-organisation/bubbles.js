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
  bubble1.grow();
  bubble2.move();
  bubble2.show();
  bubble2.grow();
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