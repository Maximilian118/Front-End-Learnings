function Person(saying) {
  this.saying = saying;
}

const ocean = {
  colour: "blue",
  texture: "water",
  number: 82398,
}

const grass = {
  colour: "green",
  texture: "grassy",
  number: 105796,
}

Person.prototype.talk = function() {
  console.log("I say", this.saying)
}

var crockford = new Person("Semicolons!!");
crockford.talk();