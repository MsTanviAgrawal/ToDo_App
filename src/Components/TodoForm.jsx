import React from 'react'
 import './Todo.css'


const TodoForm = ({ userInput,setUserInput, addItem, }) => {
  return (
    <div className='todo-form'>
        <h1 > To Do List</h1>
        <div className='todo-input-section'>
            <input
            type='text'
            placeholder='Add a Todo'
            value={userInput}
            onChange={(e) =>setUserInput(e.target.value)}
            className='todo-input'
            />
            <button onClick={addItem} className='todo-button'>Add</button>
        </div>
      
    </div>
  )
}

export default TodoForm
