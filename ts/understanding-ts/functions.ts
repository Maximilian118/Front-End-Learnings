// Instead of inferring the function return we can explicitly declare it.
// Best practice would be to let TS infer the return type unless you have 
// a specific reason for doing so.
const add = (n1: number, n2: number): number => {
  return n1 + n2
}

// Void return type.
// Void === doesn't return anything.
const printRes = (num: number): void => {
  console.log(`result: ${num}`)
}

// A function can be stored into a variable as a reference as is the case in vanilla JS.
// The problem is that this variable can be changed with a new declaration to be anything else.
// Furthermore, this issue would only be discovered at runtime whereas the purpose of TypeScript is to
// find such issues as we compile.
let combineNums = add

// not what we want to be able to do.
combineNums: 5

let combineVals: Function
combineVals = add

// This will throw an error:
// We have declared via TS that this variable must be of type function.
// Therefore we cannot assign anything other than a function to this variable.
// combineVals = 5

// This is even better as we're being even more specific.
// Here we're defining that the type in this variable must be a
// function that takes two parameters of type number and returns a number.
let combineThings: (a: number, b: number) => number

// We can assign the add function to this variable as it meets the requirements of the function type.
combineThings = add

// We can NOT assign the printRes function to the combineThings variable as printRes does not
// meet the requirements of this function type.
// combineThings = printRes

const hasCallback = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2
  cb(result)
}

hasCallback(5, 15, (res) => {
  console.log(res)
})

printRes(add(5, 12))