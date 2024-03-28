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

  return (
    <div className="App">
      <NewToDo onAddTodo={toDoAddHandler}/>
      <ToDoList items={todos}/>
    </div>
  )
}

export default App
