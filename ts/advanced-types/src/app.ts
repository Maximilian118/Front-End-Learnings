type Admin = {
  name: string
  permissions: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee // This is an intersection Type.
// By doing this, the ElevatedEmployee object must include both the permissions and startDate properties.

const emp1: ElevatedEmployee = {
  name: "Max",
  permissions: ["edit"],
  startDate: new Date(),
}

console.log(emp1)

type Combine = string | number
type Numeric = number | boolean
type Universal = Combine & Numeric

const add = (a: Universal, b: Universal) => {
  if (typeof a === "string" || typeof b === "string") {
    // This is a typeguard.
    return a.toString() + b.toString()
  }
  return a + b
}

type UnknownEmployee = Admin | Employee

const employeeInfo = (emp: UnknownEmployee) => {
  // The problem here is that we don't know if emp.permissions is available.
  // Also, typeof can't help is as we can only check for types that JS as aware of.
  console.log(`name: ${emp.name}`)
  if ("permissions" in emp) {
    console.log(`permissions: ${emp.permissions}`)
  }
  if ("startDate" in emp) {
    console.log(`start date: ${emp.startDate}`)
  }
}

employeeInfo(emp1)

// instanceof can be used instead of in for classes!
// for example: vehicle instanceof Truck

// Discriminated Unions.
// In this example, when referencing the Animal type, we don't know if flyingSpeed or groundSpeed will be available.
// We could use an in statement. However, this would only be suitable for checking between two objects.
// Instead we can add a property to each object which value is a string literal type.
// This would allow us to check for many cases in our function.
interface Bird {
  type: "bird"
  flyingSpeed: number
}

interface Horse {
  type: "horse"
  groundSpeed: number
}

type Animal = Bird | Horse

const moveAnimal = (a: Animal) => {
  let speed: number
  switch (a.type) {
    case "bird":
      speed = a.flyingSpeed
      break
    case "horse":
      speed = a.groundSpeed
      break
    default:
      speed = 0
  }

  console.log(`The speed is: ${speed}`)
}

moveAnimal({ type: "bird", flyingSpeed: 138 })

// Type Casting.
// Type Casting is used in the circumstance that TS will never be able to automatically detect what specific
// type we'd like to assign to something. For example, when targeting this input element in the DOM via an
// id reference, TS is not able to detect that this is specifically an input element. Therefore, TS throws
// an error when we try and target the value property.
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
)
console.log(userInputElement.value)

// The above syntax will work. However, for a React workflow we run into a problem.
// The same angled brackets are used in JSX and therefore we have a syntax clash.
// Instead, we can use the as keyword. The syntax is as follows:
const userInputElementAs = document.getElementById("user-input")

if (userInputElementAs) {
  ;(userInputElementAs as HTMLInputElement).value = "Hello World!"
}

// Index Properties.
// With index properties we can define a criteria rather than something specific.
// For example, here we're saying that when we build an object based on the Errors interface, an id is
// equired and the value must be a string. Also, any number of custom props can be added as long as
// the key is a string and the value is also a string.
interface Errors {
  id: string
  [prop: string]: string
}

const elementError: Errors = {
  id: "b2h5blh345",
  anything: "aString",
  anotherThing: "blablabla",
}

// Function Overloads.
// One particular problem that can occur when working with functions in TS is regarding functions with
// multiple possible return types. Consider the fucntion strOrNum below. TS doesn't know if the return
// type will be a string or a number. Therefore, neither string nor number inbuilt JS functions can be
// called on the result. To remedy this we need to tell TS what the returned type will be.
//
// Now we could simply use Type Casting on the funcion call which would enable us to call split on res
// as TS would then know the retuned value must be a string but this could end up being a lot of extra
// code. Instead we can use Function Overloads.

type strAndNum = string | number | boolean

type IOverload = {
  (a: number, b: number): number
}

function IOverload(a: number, b: number): number
function IOverload(a: string, b: string): string
function IOverload(a: boolean, b: boolean): boolean
function IOverload(a: strAndNum, b: strAndNum) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  if (typeof a === "boolean" || typeof b === "boolean") {
    if (a === b) {
      return true
    } else {
      return false
    }
  }
  return a + b
}

const res = IOverload("Max", " Anna")
const resBool = IOverload(false, true)
console.log(res, resBool)

// Optional Chaining
// This is a solution for the circomstances whereby we don't know if certain keys are present in an object.
// The solution and syntax in TS is to use an Optional Chaining Operator while using dot notation.
// In the below example we will actually get an error with TS if we comment out the job object as TS knows
// that job is unavailble. However, if we were referencing an object TS is unaware of, we'd see no errors.

const fetchedUserData = {
  id: "u1",
  name: "Max",
  // job: {
  //   title: "CEO",
  //   desc: "My own company",
  // },
}

// console.log(fetchedUserData?.job?.title)

// Nullish Coalescing
// Loosely related to Optional Chaining, this helps is deal with nullish data.
// If we know we're going to receive some data but we don't know what the value will be and we only want to
// have an outcome for null or undefined values rather than an empty string for example, we could use the
// Nullish Coalescing Operator which is ??.

const userInput = ""
const storedData = userInput ?? "DEFAULT"
console.log(storedData)

// keyof
// The keyof contraint helps us with particular situations such as the one below.
// What we're saying here in someFunc is that we'd like type U to be a key of the T type.
// Therefore, when calling someFunc we'd actually see an error if the passed key doesn't exist in
// the passed object. This is just another step towards making our code more clear to others.

interface TestObj {
  [key: string]: string
}

const testObj: TestObj = {
  name: "some name",
  dob: "15/03/1994",
}

const somefunc = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key]
}

// partial utility type

interface Example {
  name: string
  age: number
  date: number | string
}

// With this below function we're creating a variable of the Example type, adding all of the required
// key value pairs to that object and returning it therefore fulfilling the type requirement of Example.
//
// However, TS doesn't agree with adding to an empty object in such a way. If we remove the type
// assignment of Example on the obj object we see an error for every single key added to the empty object
// using dot notation. On the other hand if we assign type Example to obj that still isn't acceptable as
// the Example type requires more than an empty object.

// const createExample = (
//   name: string,
//   age: number,
//   date: number | string
// ): Example => {
//   let obj: Example = {}
//   obj.name = name
//   obj.age = age
//   obj.date = date
//   return obj
// }

// This is one situation that the Partial utility type could be of use. Consider the below code.
// The Partial utility type converts all of the keys in the Example type into optional keys.
// Therefore, TS will now agree with this workflow as we no longer need to initialise obj
// with all of the key value pairs that Example requires.

const createExample2 = (
  name: string,
  age: number,
  date: number | string,
): Example => {
  let obj: Partial<Example> = {}
  obj.name = name
  obj.age = age
  obj.date = date
  return obj as Example
}
