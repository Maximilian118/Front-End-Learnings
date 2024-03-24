/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorators/decorators.ts":
/*!**************************************!*\
  !*** ./src/decorators/decorators.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autobind: () => (/* binding */ autobind)
/* harmony export */ });
const autobind = (_, _2, descriptor) => {
    const orgMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = orgMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
};


/***/ }),

/***/ "./src/projects/form.ts":
/*!******************************!*\
  !*** ./src/projects/form.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectInput: () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ "./src/state/state.ts");
/* harmony import */ var _validation_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/validation */ "./src/validation/validation.ts");
/* harmony import */ var _decorators_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/decorators */ "./src/decorators/decorators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    gatherInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5,
        };
        if (!(0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(titleValidatable) ||
            !(0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(descriptionValidatable) ||
            !(0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(peopleValidatable)) {
            alert("Invalid input, please try again!");
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            _state_state__WEBPACK_IMPORTED_MODULE_0__.state.addProject(title, desc, people);
            this.clearInputs();
        }
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
__decorate([
    _decorators_decorators__WEBPACK_IMPORTED_MODULE_2__.autobind
], ProjectInput.prototype, "submitHandler", null);


/***/ }),

/***/ "./src/projects/projects.ts":
/*!**********************************!*\
  !*** ./src/projects/projects.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectList: () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ "./src/state/state.ts");

class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById("project-list");
        this.hostElement = document.getElementById("app");
        this.assignedProjects = [];
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        _state_state__WEBPACK_IMPORTED_MODULE_0__.state.addListener((projects) => {
            this.assignedProjects = projects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        for (const prjItem of this.assignedProjects) {
            const listItem = document.createElement("li");
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " Projects";
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
}


/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
class State {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    static getState() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new State();
            return this.instance;
        }
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addProject(title, description, people) {
        const newProject = {
            id: Math.random().toString(),
            title,
            description,
            people,
        };
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const state = State.getState();


/***/ }),

/***/ "./src/validation/validation.ts":
/*!**************************************!*\
  !*** ./src/validation/validation.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
const validate = (valInt) => {
    let isValid = true;
    if (valInt.required) {
        isValid = isValid && valInt.value.toString().trim().length !== 0;
    }
    if (valInt.minLength != null && typeof valInt.value === "string") {
        isValid = isValid && valInt.value.length >= valInt.minLength;
    }
    if (valInt.maxLength != null && typeof valInt.value === "string") {
        isValid = isValid && valInt.value.length <= valInt.maxLength;
    }
    if (valInt.min != null && typeof valInt.value === "number") {
        isValid = isValid && valInt.value >= valInt.min;
    }
    if (valInt.max != null && typeof valInt.value === "number") {
        isValid = isValid && valInt.value <= valInt.max;
    }
    return isValid;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/projects */ "./src/projects/projects.ts");
/* harmony import */ var _projects_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/form */ "./src/projects/form.ts");


new _projects_form__WEBPACK_IMPORTED_MODULE_1__.ProjectInput();
new _projects_projects__WEBPACK_IMPORTED_MODULE_0__.ProjectList("active");
new _projects_projects__WEBPACK_IMPORTED_MODULE_0__.ProjectList("done");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkRBQVcsQ0FBQyxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNvcmF0b3JzLy4vc3JjL2RlY29yYXRvcnMvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly9kZWNvcmF0b3JzLy4vc3JjL3Byb2plY3RzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vZGVjb3JhdG9ycy8uL3NyYy9wcm9qZWN0cy9wcm9qZWN0cy50cyIsIndlYnBhY2s6Ly9kZWNvcmF0b3JzLy4vc3JjL3N0YXRlL3N0YXRlLnRzIiwid2VicGFjazovL2RlY29yYXRvcnMvLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnRzIiwid2VicGFjazovL2RlY29yYXRvcnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVjb3JhdG9ycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVjb3JhdG9ycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlY29yYXRvcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZWNvcmF0b3JzLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNvcmF0b3JzXG5leHBvcnQgY29uc3QgYXV0b2JpbmQgPSAoXG4gIF86IGFueSxcbiAgXzI6IHN0cmluZyxcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLFxuKSA9PiB7XG4gIGNvbnN0IG9yZ01ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWVcblxuICBjb25zdCBhZGpEZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IGJvdW5kRm4gPSBvcmdNZXRob2QuYmluZCh0aGlzKVxuICAgICAgcmV0dXJuIGJvdW5kRm5cbiAgICB9LFxuICB9XG5cbiAgcmV0dXJuIGFkakRlc2NyaXB0b3Jcbn1cbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL3N0YXRlXCJcbmltcG9ydCB7IFZhbGlkYXRhYmxlLCB2YWxpZGF0ZSB9IGZyb20gXCIuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb25cIlxuaW1wb3J0IHsgYXV0b2JpbmQgfSBmcm9tIFwiLi4vZGVjb3JhdG9ycy9kZWNvcmF0b3JzXCJcblxuLy8gRm9ybVxuZXhwb3J0IGNsYXNzIFByb2plY3RJbnB1dCB7XG4gIHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudFxuICBob3N0RWxlbWVudDogSFRNTERpdkVsZW1lbnRcbiAgZWxlbWVudDogSFRNTEZvcm1FbGVtZW50XG4gIHRpdGxlSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50XG4gIGRlc2NyaXB0aW9uSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50XG4gIHBlb3BsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInByb2plY3QtaW5wdXRcIixcbiAgICApISBhcyBIVE1MVGVtcGxhdGVFbGVtZW50XG4gICAgdGhpcy5ob3N0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpISBhcyBIVE1MRGl2RWxlbWVudFxuXG4gICAgY29uc3QgaW1wb3J0Tm9kZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudCwgdHJ1ZSlcbiAgICB0aGlzLmVsZW1lbnQgPSBpbXBvcnROb2RlLmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxGb3JtRWxlbWVudFxuICAgIHRoaXMuZWxlbWVudC5pZCA9IFwidXNlci1pbnB1dFwiXG5cbiAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiN0aXRsZVwiLFxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudFxuICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI2Rlc2NyaXB0aW9uXCIsXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3Blb3BsZVwiLFxuICAgICkgYXMgSFRNTElucHV0RWxlbWVudFxuXG4gICAgdGhpcy5jb25maWd1cmUoKVxuICAgIHRoaXMuYXR0YWNoKClcbiAgfVxuXG4gIHByaXZhdGUgZ2F0aGVySW5wdXQoKTogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdIHwgdm9pZCB7XG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZVxuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWVcbiAgICBjb25zdCBlbnRlcmVkUGVvcGxlID0gdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQudmFsdWVcblxuICAgIGNvbnN0IHRpdGxlVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xuICAgICAgdmFsdWU6IGVudGVyZWRUaXRsZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH1cbiAgICBjb25zdCBkZXNjcmlwdGlvblZhbGlkYXRhYmxlOiBWYWxpZGF0YWJsZSA9IHtcbiAgICAgIHZhbHVlOiBlbnRlcmVkRGVzY3JpcHRpb24sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbkxlbmd0aDogNSxcbiAgICB9XG4gICAgY29uc3QgcGVvcGxlVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xuICAgICAgdmFsdWU6ICtlbnRlcmVkUGVvcGxlLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDUsXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgIXZhbGlkYXRlKHRpdGxlVmFsaWRhdGFibGUpIHx8XG4gICAgICAhdmFsaWRhdGUoZGVzY3JpcHRpb25WYWxpZGF0YWJsZSkgfHxcbiAgICAgICF2YWxpZGF0ZShwZW9wbGVWYWxpZGF0YWJsZSlcbiAgICApIHtcbiAgICAgIGFsZXJ0KFwiSW52YWxpZCBpbnB1dCwgcGxlYXNlIHRyeSBhZ2FpbiFcIilcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2VudGVyZWRUaXRsZSwgZW50ZXJlZERlc2NyaXB0aW9uLCArZW50ZXJlZFBlb3BsZV1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFySW5wdXRzKCkge1xuICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiXG4gICAgdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZSA9IFwiXCJcbiAgICB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCJcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBwcml2YXRlIHN1Ym1pdEhhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHRoaXMuZ2F0aGVySW5wdXQoKVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlcklucHV0KSkge1xuICAgICAgY29uc3QgW3RpdGxlLCBkZXNjLCBwZW9wbGVdID0gdXNlcklucHV0XG4gICAgICBzdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpXG4gICAgICB0aGlzLmNsZWFySW5wdXRzKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdEhhbmRsZXIpXG4gIH1cblxuICBwcml2YXRlIGF0dGFjaCgpIHtcbiAgICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgdGhpcy5lbGVtZW50KVxuICB9XG59XG4iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9zdGF0ZVwiXG5cbi8vIExpc3RcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdCB7XG4gIHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudFxuICBob3N0RWxlbWVudDogSFRNTERpdkVsZW1lbnRcbiAgZWxlbWVudDogSFRNTEVsZW1lbnRcbiAgYXNzaWduZWRQcm9qZWN0czogYW55W11cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6IFwiYWN0aXZlXCIgfCBcImRvbmVcIikge1xuICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcInByb2plY3QtbGlzdFwiLFxuICAgICkhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnRcbiAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikhIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gW11cblxuICAgIGNvbnN0IGltcG9ydE5vZGUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQsIHRydWUpXG4gICAgdGhpcy5lbGVtZW50ID0gaW1wb3J0Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRWxlbWVudFxuICAgIHRoaXMuZWxlbWVudC5pZCA9IGAke3RoaXMudHlwZX0tcHJvamVjdHNgXG5cbiAgICBzdGF0ZS5hZGRMaXN0ZW5lcigocHJvamVjdHM6IGFueVtdKSA9PiB7XG4gICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBwcm9qZWN0c1xuICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpXG4gICAgfSlcblxuICAgIHRoaXMuYXR0YWNoKClcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBjb25zdCBsaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGAsXG4gICAgKSEgYXMgSFRNTFVMaXN0RWxlbWVudFxuXG4gICAgZm9yIChjb25zdCBwcmpJdGVtIG9mIHRoaXMuYXNzaWduZWRQcm9qZWN0cykge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJqSXRlbS50aXRsZVxuICAgICAgbGlzdEVsLmFwcGVuZENoaWxkKGxpc3RJdGVtKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBsaXN0SWQgPSBgJHt0aGlzLnR5cGV9LXByb2plY3RzLWxpc3RgXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSEuaWQgPSBsaXN0SWRcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpIS50ZXh0Q29udGVudCA9XG4gICAgICB0aGlzLnR5cGUudG9VcHBlckNhc2UoKSArIFwiIFByb2plY3RzXCJcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoKCkge1xuICAgIHRoaXMuaG9zdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRoaXMuZWxlbWVudClcbiAgfVxufVxuIiwiLy8gR2xvYmFsIFN0YXRlIFNpbmdsZXRvblxuZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IGFueVtdID0gW11cbiAgcHJpdmF0ZSBwcm9qZWN0czogYW55W10gPSBbXVxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU3RhdGVcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgZ2V0U3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdGUoKVxuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VcbiAgICB9XG4gIH1cblxuICBhZGRMaXN0ZW5lcihsaXN0ZW5lckZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXJGbilcbiAgfVxuXG4gIGFkZFByb2plY3QodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgcGVvcGxlOiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0ge1xuICAgICAgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBwZW9wbGUsXG4gICAgfVxuXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG5cbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyRm4gb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKVxuICAgIH1cbiAgfVxufVxuXG4vLyBJbml0aWFsaXNlIFN0YXRlXG5leHBvcnQgY29uc3Qgc3RhdGUgPSBTdGF0ZS5nZXRTdGF0ZSgpXG4iLCIvLyBWYWxpZGF0aW9uXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRhYmxlIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlclxuICByZXF1aXJlZD86IGJvb2xlYW5cbiAgbWluTGVuZ3RoPzogbnVtYmVyXG4gIG1heExlbmd0aD86IG51bWJlclxuICBtaW4/OiBudW1iZXJcbiAgbWF4PzogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9ICh2YWxJbnQ6IFZhbGlkYXRhYmxlKSA9PiB7XG4gIGxldCBpc1ZhbGlkID0gdHJ1ZVxuXG4gIGlmICh2YWxJbnQucmVxdWlyZWQpIHtcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxJbnQudmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwXG4gIH1cblxuICBpZiAodmFsSW50Lm1pbkxlbmd0aCAhPSBudWxsICYmIHR5cGVvZiB2YWxJbnQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxJbnQudmFsdWUubGVuZ3RoID49IHZhbEludC5taW5MZW5ndGhcbiAgfVxuXG4gIGlmICh2YWxJbnQubWF4TGVuZ3RoICE9IG51bGwgJiYgdHlwZW9mIHZhbEludC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbEludC52YWx1ZS5sZW5ndGggPD0gdmFsSW50Lm1heExlbmd0aFxuICB9XG5cbiAgaWYgKHZhbEludC5taW4gIT0gbnVsbCAmJiB0eXBlb2YgdmFsSW50LnZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsSW50LnZhbHVlID49IHZhbEludC5taW5cbiAgfVxuXG4gIGlmICh2YWxJbnQubWF4ICE9IG51bGwgJiYgdHlwZW9mIHZhbEludC52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbEludC52YWx1ZSA8PSB2YWxJbnQubWF4XG4gIH1cblxuICByZXR1cm4gaXNWYWxpZFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RzL3Byb2plY3RzXCJcbmltcG9ydCB7IFByb2plY3RJbnB1dCB9IGZyb20gXCIuL3Byb2plY3RzL2Zvcm1cIlxuXG5uZXcgUHJvamVjdElucHV0KClcbm5ldyBQcm9qZWN0TGlzdChcImFjdGl2ZVwiKVxubmV3IFByb2plY3RMaXN0KFwiZG9uZVwiKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9