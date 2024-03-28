import React, {useState} from 'react'
import ToDoList from './components/TodoList'
import NewToDo from './components/newToDo'

interface initState {
  id: string,
  text: string,
}
// React.FC = An implicit type given to us from @types/react and ensures that
// what's returned is JSX from a Function Component. 
const App: React.FC = () => {
  const [todos, setTodos] = useState<initState[]>([])

  const toDoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, 
      {
        id: JSON.stringify(Math.random()), 
        text,
      }
    ])
  }

  const deleteTodoHandler = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <NewToDo onAddTodo={toDoAddHandler}/>
      <ToDoList deleteTodoHandler={deleteTodoHandler} items={todos}/>
    </div>
  )
}

export default App
