// A decorator "factory":
const Logger = (logString: string) => {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

@Logger("Person: Logging...")
class Person {
  name = "Max"
  colour = ""

  colourChanger = (colour: string) => {
    this.colour = colour
  }

  constructor() {
    console.log("Creating person object...")
  }
}

const person = new Person()
console.log(person)
person.colourChanger("Green")
console.log(person)
