const add = (n1: number, n2: number, log: boolean, phrase: string) => {
  const result = n1 + n2

  if (log) {
    console.log(phrase + result)  
  } else {
    return result
  }
}

const number1 = 5
const number2 = '5'
const log = true
const resultPhrase = "The Result is: "

add(number1, +number2, log, resultPhrase)