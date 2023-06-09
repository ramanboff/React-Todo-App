import React, { useState , useEffect} from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
 const [filteredTodos, setFilteredTodos] = useState([])

 useEffect(() => {
  filteredTodoHandler()
 },[status, todos])


 const filteredTodoHandler = () => {
  switch (status){
    case "completed":
      setFilteredTodos(todos.filter((todo) => todo.completed=== true))
      break;
    case "uncompleted":
      setFilteredTodos(todos.filter((todo) => todo.completed === false))
      break;
    default:
      setFilteredTodos(todos)
      break;
  }
}

  return (
    <div className='App'>
      <header>
        <h1>Ramans Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
        status={status}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  )
}

export default App
