// aliases = Makes the code more readable
// Union types = accept multiple types
type NumStr = number | string
type resType = 'as_number' | 'as_text'

// Literal types = have a set value
const combine = (i1: NumStr, i2: NumStr, resType: resType) => {
  let res: NumStr

  if (typeof i1 === 'number' && typeof i2 === 'number' || resType === 'as_number') {
    res = +i1 + +i2
  } else {
    res = i1.toString() + i2.toString()
  }

  if (resType === 'as_number') {
    return +res
  } else {
    return res.toString()
  }
}

const combinedAges = combine(5, 34, 'as_number')
console.log(combinedAges)

const combinedStringAges = combine('5', '34', 'as_number')
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as_text')
console.log(combinedNames)