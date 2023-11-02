"use strict";
const names = ["luke", "dale"];
const names2 = ["example", "2"];
const numbers = [1, 4, 6, 3];
names[0].split("");
const merge = (objA, objB) => {
    return Object.assign(objA, objB);
};
const mergedObj = merge({ name: "Max" }, { age: 29 });
const merge2 = (objA, objB) => {
    return Object.assign(objA, objB);
};
const mergedObj2 = merge2({ name: "Max" }, { age: 29 });
console.log(mergedObj2.age);
const merge3 = (objA, objB) => {
    return Object.assign(objA, objB);
};
//# sourceMappingURL=app.js.map