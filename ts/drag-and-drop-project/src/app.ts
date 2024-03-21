// autobind decorator
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
    this.attach()

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
    const titleVal = this.titleInputElement.value
    const descVal = this.descriptionInputElement.value
    const peopleVal = this.peopleInputElement.value

    if (
      titleVal.trim().length === 0 ||
      descVal.trim().length === 0 ||
      peopleVal.trim().length === 0
    ) {
      alert("Invalid")
      return
    } else {
      return [titleVal, descVal, +peopleVal]
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
