let array = [30, 3478, 283, "word", 283, 47[38, 38, 84, [73, 735, 64, 286]]];
let notArray = 200;
let wordArray = [
  "Click me!",
  "Pink fluffy unicorns dancing on rainbows",
  "Yay that was fun",
  "I could get used to this",
  "... OK fun's over",
  "Please stop",
  "Do you mind?!",
  "I have rights you know!",
  "Piss off!",
  "Ok I'm just joking",
  "I really am having fun",
  "so you can go now",
  "Grr!!! Ok that's it I quit!",
  "",
  "",
  "",
  "AAAGGHH Would you STOP!",
  "One more press and I die!",
  "BANG!"
]
let increment = 0;
//let scramble = random(200, 600)

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  fill(255);
  textSize(32);
  text(wordArray[increment], 100, 100);
  fill(200, 200, 50);
  ellipse(notArray, 400, array[4]);
  fill(200, 50, 50);
  ellipse(array[2], 200, array[0]);
  fill(50, 50, 200);
  ellipse(600, array[2], array[0]);
}

function mousePressed() {
  increment++;
  if (increment > 19) {
    increment = 0;
  }
}