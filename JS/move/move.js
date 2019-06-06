var s = function(sketch) {

  var move = 0;

  sketch.function setup() {
    sketch.createCanvas(800, 800);
  };

  sketch.function draw() {
    sketch.background(move, 100, 200);
    sketch.ellipse(move, 750, 100, 100);
    move = move + 1;
  };
};

var p5move = new p5(s, 'p5move');