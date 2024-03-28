import React from "react"

interface ToDoListProps {
  items: {id: string, text: string}[],
  deleteTodoHandler: (id: string) => void,
}

const ToDoList: React.FC<ToDoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => 
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.deleteTodoHandler.bind(null, todo.id)}>Delete</button>
        </li>
      )}
    </ul>
  )
}

export default ToDoList
