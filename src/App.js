import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import './App.css'
import TodoList from './components/Todos/TodoList'
import TodoForm from './components/Todos/TodoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = { text: text, isCompleted: false, id: uuidv4() }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      })
    )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
