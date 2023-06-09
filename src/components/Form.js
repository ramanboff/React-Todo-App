import React from 'react'
import { v4 as uuidv4 } from 'uuid'
const Form = ({setInputText,inputText,setTodos, todos,setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    if(!inputText) return
    setInputText('')
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }])
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      <form>
        <input
          type='text'
          className='todo-input'
          onChange={inputTextHandler}
          value={inputText}
        />
        <button
          className='todo-button'
          type='submit'
          onClick={submitTodoHandler}
        >
          <i className='fas fa-plus-square'></i>
        </button>
        <div className='select'>
          <select className='filter-todo' onChange={statusHandler}>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>UnComplated</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form
