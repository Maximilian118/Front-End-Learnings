// Global State Singleton
export class State {
  private listeners: any[] = []
  private projects: any[] = []
  private static instance: State

  private constructor() {}

  static getState() {
    if (this.instance) {
      return this.instance
    } else {
      this.instance = new State()
      return this.instance
    }
  }

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn)
  }

  addProject(title: string, description: string, people: number) {
    const newProject = {
      id: Math.random().toString(),
      title,
      description,
      people,
    }

    this.projects.push(newProject)

    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice())
    }
  }
}

// Initialise State
export const state = State.getState()
