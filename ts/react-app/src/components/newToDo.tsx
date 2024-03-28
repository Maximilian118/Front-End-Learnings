import React, {useRef} from "react"

type NewToDoProps = {
  onAddTodo: (toDoText: string) => void
}

const NewToDo: React.FC<NewToDoProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null)

  const toDoSumbitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = inputRef.current!.value
    props.onAddTodo(enteredText)
  }

  return (
    <form onSubmit={toDoSumbitHandler}>
      <div>
        <label htmlFor="todo-text">ToDo Text</label>
        <input type="text" id="todo-text" ref={inputRef}/>
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default NewToDo
