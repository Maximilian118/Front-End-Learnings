// prettier-ignore
interface Person { // An interface differs from a class in that while a class is a blueprint, an interface is more a type
  name: string     // to be used in typescript.
  age: number
  height: number   // Interface properties cannot have an initialiser. We can only define the structure.
  method(param: any): void   // Methods are defined like this within an interface.
}

let user: Person

user = {
  name: "Max",
  age: 30,
  height: 5.1,

  method(param: string) {
    console.log(`cows go ${param}`)
  },
}

user.method("moo")

// A good question at this point to ask is why would we need to use interfaces when I could simply declare Person as
// a Type instead? The type keyword would be perfectly adiquate to use in this example and would compile with no errors.

// While the type keyword would do the same thing as interface in this example, interface allows us to be more specific
// in that we can only define an object and in this object we have a more stringent set of types allowed.

// Interfaces can also be very usful when defining a class as seen below. Multiple interfaces can be used to define a class.
// In big projects this workflow can be implemented for DRY.

interface Named {
  readonly name: string
  outPutName?: string // ? Indicates that this is an optional property.
  pets?: number
  dontNeed?(): boolean // optional methods are also possible.
}

interface Greetable extends Named {
  readonly role: string
  greet(param: any): void
}

class Employee implements Greetable {
  name: string
  role: string

  constructor(n: string, role: string) {
    this.name = n
    this.role = role
  }

  greet(): string {
    const msg = `welcome ${this.name}`
    console.log(msg)
    return msg
  }
}

const emp1 = new Employee("Pat", "Postman")
console.log({ ...emp1, msg: emp1.greet() })

// console.log(new Employee("lola", "Kindle"))
