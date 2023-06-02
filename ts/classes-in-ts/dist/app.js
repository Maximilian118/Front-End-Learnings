"use strict";
class Dept {
    constructor(n) {
        this.name = "Default";
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class DeptWithShorthandConstructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
DeptWithShorthandConstructor.year = 2023;
class ITDept extends DeptWithShorthandConstructor {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`ITDept: ${this.id}`);
    }
}
class AccountingDept extends DeptWithShorthandConstructor {
    constructor(id, reports, lastReport = reports[0]) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = lastReport;
    }
    static createAccDept() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDept("S1", []);
            return this.instance;
        }
    }
    describe() {
        console.log(`Accounting Dept ID: ${this.id}`);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw Error("There are no reports!");
        }
    }
    set mostRecentReport(value) {
        if (!value) {
            throw Error("No Value has been passed!");
        }
        else {
            this.addReport(value);
        }
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    getReports() {
        console.log(this.reports);
        console.log(this.lastReport);
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        else {
            this.employees.push(employee);
        }
    }
}
const employee1 = DeptWithShorthandConstructor.createEmployee("Max");
console.log(employee1);
console.log(DeptWithShorthandConstructor.year);
const iTDept = new ITDept("D1", ["Max"]);
iTDept.addEmployee("Max");
iTDept.addEmployee("Manu");
iTDept.describe();
iTDept.printEmployees();
console.log(iTDept);
const accounting = AccountingDept.createAccDept();
accounting.describe();
accounting.addReport("I did a woopsie");
accounting.addReport("so did I");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.getReports();
accounting.printEmployees();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Dunno";
//# sourceMappingURL=app.js.map