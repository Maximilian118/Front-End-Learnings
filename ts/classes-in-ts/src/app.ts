class Dept {
  private name: string = "Default" // private = Can't be mutated outside of the class.
  private employees: string[] = [] // EG: object.name = "NotDefault" would throw an error.

  constructor(n: string) {
    // The constructor function is used to initialise or "construct" the class with properties
    this.name = n // and optionally default values as well.
  }

  describe(this: Dept) {
    // A function in a class or object is called a method.
    console.log(`Department: ${this.name}`) // When called just like a normal function it executes with passed data.
  }

  addEmployee(employee: string) {
    // As the employee property is private, the way to mutate the data is via a mathod
    this.employees.push(employee) // such as this.
  }

  printEmployees() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}
// prettier-ignore
abstract class DeptWithShorthandConstructor {
  protected employees: string[] = []  // protected is similar to private. protected = can be mutated by any
                                      // class that extends this class. EG: Using a method in ITDept or AccountingDept to mutate employees will be fine.

  static year: number = 2023 // A static property only available outside of the class.

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: DeptWithShorthandConstructor): void // Abstract means that any class that is based on this class
                                                              // MUST use this method or it will throw an error.
  // prettier-ignore
  static createEmployee(name: string) { // static properties and methods are intended to be accessed only from outside
    return { name: name }               // the class. A good example of this is the globally available Math class.
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployees() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDept extends DeptWithShorthandConstructor {
  constructor(id: string, public admins: string[]) {
    super(id, "IT")
  }

  describe() {
    console.log(`ITDept: ${this.id}`)
  }
}

class AccountingDept extends DeptWithShorthandConstructor {
  // prettier-ignore
  private constructor(  // A class with a private constructor effectively means an object based on this class cannot be
    id: string, // created in a normal fassion with the "new" key word as the constructor is not exposed.
    private reports: string[],
    private lastReport: string = reports[0],
  ) {
    super(id, "Accounting")
  }

  private static instance: AccountingDept // The class is stored here to be referenced and used in the method below.
  // prettier-ignore
  static createAccDept() { // After making the constructor private, this method can then be used to achive a use case
    if (this.instance) { // whereby only one object based on this class can be created. This is called a singleton.
      return this.instance
    } else {
      this.instance = new AccountingDept("S1", [])
      return this.instance
    }
  }

  describe() {
    console.log(`Accounting Dept ID: ${this.id}`)
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    } else {
      throw Error("There are no reports!")
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw Error("No Value has been passed!")
    } else {
      this.addReport(value)
    }
  }

  addReport(report: string) {
    this.reports.push(report)
    this.lastReport = report
  }

  getReports() {
    console.log(this.reports)
    console.log(this.lastReport)
  }

  addEmployee(employee: string) {
    if (employee === "Max") {
      // A method in your base class can be overwritten. You'll notice DeptWithShorthandConstructor
      // also has a method of the same name. The latest implementation of the method will always be
      // used.
      return
    } else {
      this.employees.push(employee)
    }
  }
}

const employee1 = DeptWithShorthandConstructor.createEmployee("Max")
console.log(employee1)
console.log(DeptWithShorthandConstructor.year)

const iTDept = new ITDept("D1", ["Max"])

iTDept.addEmployee("Max")
iTDept.addEmployee("Manu")

iTDept.describe()
iTDept.printEmployees()

console.log(iTDept)

const accounting = AccountingDept.createAccDept()

accounting.describe()

accounting.addReport("I did a woopsie")
accounting.addReport("so did I")

accounting.addEmployee("Max")
accounting.addEmployee("Manu")

accounting.getReports()
accounting.printEmployees()
console.log(accounting.mostRecentReport)
accounting.mostRecentReport = "Dunno"

// const iTDeptCopy = { name: "Max", describe: iTDept.describe }
// iTDeptCopy.describe()
