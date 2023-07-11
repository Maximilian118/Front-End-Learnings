"use strict";
let user;
user = {
    name: "Max",
    age: 30,
    height: 5.1,
    method(param) {
        console.log(`cows go ${param}`);
    },
};
user.method("moo");
class Employee {
    constructor(n, role) {
        this.name = n;
        this.role = role;
    }
    greet() {
        console.log(`welcome ${this.name}`);
    }
}
const emp1 = new Employee("Pat", "Postman");
console.log(emp1);
//# sourceMappingURL=app.js.map