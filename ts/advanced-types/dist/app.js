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
const moveAnimal = (a) => {
    let speed;
    switch (a.type) {
        case "bird":
            speed = a.flyingSpeed;
            break;
        case "horse":
            speed = a.groundSpeed;
            break;
        default:
            speed = 0;
    }
    console.log(`The speed is: ${speed}`);
};
moveAnimal({ type: "bird", flyingSpeed: 138 });
const userInputElement = (document.getElementById("user-input"));
console.log(userInputElement.value);
const userInputElementAs = document.getElementById("user-input");
if (userInputElementAs) {
    ;
    userInputElementAs.value = "Hello World!";
}
const elementError = {
    id: "b2h5blh345",
    anything: "aString",
    anotherThing: "blablabla",
};
function IOverload(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    if (typeof a === "boolean" || typeof b === "boolean") {
        if (a === b) {
            return true;
        }
        else {
            return false;
        }
    }
    return a + b;
}
const res = IOverload("Max", " Anna");
const resBool = IOverload(false, true);
console.log(res, resBool);
const fetchedUserData = {
    id: "u1",
    name: "Max",
};
const userInput = "";
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
const testObj = {
    name: "some name",
    dob: "15/03/1994",
};
const somefunc = (obj, key) => {
    return obj[key];
};
//# sourceMappingURL=app.js.map