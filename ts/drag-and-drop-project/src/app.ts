// Decorators
const autobind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
  const orgMethod = descriptor.value

  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = orgMethod.bind(this)
      return boundFn
    },
  }

  return adjDescriptor
}

// Validation
interface Validatable {
  value: string | number
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}

const validate = (valInt: Validatable) => {
  let isValid = true

  if (valInt.required) {
    isValid = isValid && valInt.value.toString().trim().length !== 0
  }

  if (valInt.minLength != null && typeof valInt.value === "string") {
    isValid = isValid && valInt.value.length >= valInt.minLength
  }

  if (valInt.maxLength != null && typeof valInt.value === "string") {
    isValid = isValid && valInt.value.length <= valInt.maxLength
  }

  if (valInt.min != null && typeof valInt.value === "number") {
    isValid = isValid && valInt.value >= valInt.min
  }

  if (valInt.max != null && typeof valInt.value === "number") {
    isValid = isValid && valInt.value <= valInt.max
  }

  return isValid
}

// List
class ProjectList {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLElement

  constructor(private type: "active" | "done") {
    this.templateElement = document.getElementById(
      "project-list",
    )! as HTMLTemplateElement
    this.hostElement = document.getElementById("app")! as HTMLDivElement

    const importNode = document.importNode(this.templateElement.content, true)
    this.element = importNode.firstElementChild as HTMLElement
    this.element.id = `${this.type}-projects`
    this.attach()
    this.renderContent()
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`
    this.element.querySelector("ul")!.id = listId
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " Projects"
  }

  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element)
  }
}

// Form
class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLFormElement
  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement

  constructor() {
    this.templateElement = document.getElementById(
      "project-input",
    )! as HTMLTemplateElement
    this.hostElement = document.getElementById("app")! as HTMLDivElement

    const importNode = document.importNode(this.templateElement.content, true)
    this.element = importNode.firstElementChild as HTMLFormElement
    this.element.id = "user-input"

    this.titleInputElement = this.element.querySelector(
      "#title",
    ) as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector(
      "#description",
    ) as HTMLInputElement
    this.peopleInputElement = this.element.querySelector(
      "#people",
    ) as HTMLInputElement

    this.configure()
    this.attach()
  }

  private gatherInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value
    const enteredDescription = this.descriptionInputElement.value
    const enteredPeople = this.peopleInputElement.value

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    }
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    }
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    }

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input, please try again!")
      return
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople]
    }
  }

  private clearInputs() {
    this.titleInputElement.value = ""
    this.descriptionInputElement.value = ""
    this.peopleInputElement.value = ""
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault()
    const userInput = this.gatherInput()

    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput
      console.log(title, desc, people)
      this.clearInputs()
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element)
  }
}

const prjInput = new ProjectInput()
const activePrjList = new ProjectList("active")
const donePrjList = new ProjectList("done")
