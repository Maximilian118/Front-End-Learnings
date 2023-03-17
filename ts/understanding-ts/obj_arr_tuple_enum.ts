// const person: { // explicit type assignment
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string] // tuple type
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN = 5, READ_ONLY, AUTHOR }

const person = { // inferred type assignment
  name: "Maximilian",
  age: 28,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
}

// person.role.push('admin')
// person.role[1] = 'sss'

let anotherArr: any[]
anotherArr = ['Sports', true, 1]

console.log(person)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
} 

if (person.role === Role.AUTHOR) {
  console.log('An Admin')
}