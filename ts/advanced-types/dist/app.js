"use strict";
const emp1 = {
    name: "Max",
    permissions: ["edit"],
    startDate: new Date(),
};
console.log(emp1);
const add = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
const employeeInfo = (emp) => {
    console.log(`name: ${emp.name}`);
    if ("permissions" in emp) {
        console.log(`permissions: ${emp.permissions}`);
    }
    if ("startDate" in emp) {
        console.log(`start date: ${emp.startDate}`);
    }
};
employeeInfo(emp1);
//# sourceMappingURL=app.js.map