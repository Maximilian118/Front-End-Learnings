function setup() {
  createCanvas(800, 800);
  background(200, 50, 50);
  let button = createButton('I am a button');
  button.mousePressed(backgroundChange);

  function backgroundChange() {
    background(50, 200, 50);
  }

  let button2 = createButton('I am also a button');
  button2.mousePressed(square);

  function square() {
    fill(50, 200, 50);
    strokeWeight(4);
    rect(300, 300, 200, 200);
  }
}