import { Product } from "./product.model"
import { validate } from "class-validator"
import { ProjectList } from "./projects/projects"
import { ProjectInput } from "./projects/form"
import _ from "lodash"

declare var GLOBAL: string

const newProd = new Product("", -5.99)

validate(newProd).then((err) => {
  if (err.length > 0) {
    console.log("Wups!! Errors:")
    console.log(err)
  } else {
    console.log(newProd.getInformation())
  }
})

new ProjectInput()
new ProjectList("active")
new ProjectList("done")

console.log(_.shuffle([1, 2, 3]))
console.log(GLOBAL)
