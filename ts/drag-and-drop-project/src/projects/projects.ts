import { state } from "../state/state"

// List
export class ProjectList {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLElement
  assignedProjects: any[]

  constructor(private type: "active" | "done") {
    this.templateElement = document.getElementById(
      "project-list",
    )! as HTMLTemplateElement
    this.hostElement = document.getElementById("app")! as HTMLDivElement
    this.assignedProjects = []

    const importNode = document.importNode(this.templateElement.content, true)
    this.element = importNode.firstElementChild as HTMLElement
    this.element.id = `${this.type}-projects`

    state.addListener((projects: any[]) => {
      this.assignedProjects = projects
      this.renderProjects()
    })

    this.attach()
    this.renderContent()
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`,
    )! as HTMLUListElement

    for (const prjItem of this.assignedProjects) {
      const listItem = document.createElement("li")
      listItem.textContent = prjItem.title
      listEl.appendChild(listItem)
    }
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
