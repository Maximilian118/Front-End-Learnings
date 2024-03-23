export class State {
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
export const state = State.getState();
//# sourceMappingURL=state.js.map