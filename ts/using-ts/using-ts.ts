const button = document.querySelector("button")
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement

function add(num1: number, num2: number) {
  return num1 + num2
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value))
})

// Value === typeof 'string' so by adding the two we concatenate the strings and get "105".
// While there are no technical errors with this code we're actually looking for two numbers
// to be added together. This is a logical error that wouldn't be displayed in the IDE.s

// With TypeScript we're able to be explicit about what sort of element we're targeting by ID
// and also that we expect only numbers to be passed to our add function.
