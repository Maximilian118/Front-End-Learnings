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
