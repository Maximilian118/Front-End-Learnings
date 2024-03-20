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
      "#peoplee",
    ) as HTMLInputElement

    this.configure()
    this.attach()
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault()
    console.log(this.titleInputElement.value)
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element)
  }
}

const prjInput = new ProjectInput()
