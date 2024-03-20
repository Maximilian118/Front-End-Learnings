"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Logger = (logString) => {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
};
let Person = class Person {
    constructor() {
        this.name = "Max";
        this.colour = "";
        this.colourChanger = (colour) => {
            this.colour = colour;
        };
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("Person: Logging...")
], Person);
const person = new Person();
console.log(person);
person.colourChanger("Green");
console.log(person);
//# sourceMappingURL=app.js.map