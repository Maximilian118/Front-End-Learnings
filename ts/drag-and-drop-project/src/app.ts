import { ProjectList } from "./projects/projects"
import { ProjectInput } from "./projects/form"
import _ from "lodash"

new ProjectInput()
new ProjectList("active")
new ProjectList("done")

console.log(_.shuffle([1, 2, 3]))
