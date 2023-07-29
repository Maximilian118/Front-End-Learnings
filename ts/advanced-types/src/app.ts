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
