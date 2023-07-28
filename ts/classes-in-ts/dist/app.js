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
        const msg = `welcome ${this.name}`;
        console.log(msg);
        return msg;
    }
}
const emp1 = new Employee("Pat", "Postman");
console.log(Object.assign(Object.assign({}, emp1), { msg: emp1.greet() }));
//# sourceMappingURL=app.js.map