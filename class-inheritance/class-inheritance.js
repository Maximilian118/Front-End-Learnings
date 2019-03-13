class Planet {                             // parent class
  constructor(shape, colour, gravity) {
    this._shape = shape;
    this._colour = colour;
    this._gravity = gravity;
    this._atmosphere = 0;
  }
  get shape() {
    return this._shape;
  }
  get colour() {
    return this._colour;
  }
  get gravity() {
    return this._gravity;
  }
  posAtmosphire(pos) {
    this._atmosphere += pos;
  }
  negAtmosphire(neg) {
    this._atmosphere -= neg;
  }
}

class Moon extends Planet {              // child class // extends = inherit from parent 
  constructor(shape, colour, gravity) {
    super(shape);                        // super = use this from parent class
    this._colour = colour;
    this._gravity = gravity;
    this._atmosphere = 0;
  }
  get colour() {
    return this._colour;
  }
  get gravity() {
    return this._gravity;
  }
  posAtmosphire(pos) {
    this._atmosphere += pos;
  }
  negAtmosphire(neg) {
    this._atmosphere -= neg;
  }
}

const whiteplanet = new Moon('round', 'white', 'low');

