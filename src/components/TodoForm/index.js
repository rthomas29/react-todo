import React, { useState } from 'react'
import './styles.css'

const TodoForm = ({ handleTaskAdd, handleTaskDelete }) => {
  const [inputState, setInputState] = useState('')
  const handleTaskSubmit = (e) => {
    const value = inputState
    e.preventDefault()
    setInputState('')
    handleTaskAdd(value)
  }
  return (
    <form className='form-inline' onSubmit={(e) => handleTaskSubmit(e)}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Add new task'
          aria-label='checkbox to toggle task completion'
          onChange={(e) => setInputState(e.target.value)}
          value={inputState}
          autoFocus
        />
        <button className='btn btn-success' type='submit'>Add</button>
      </div>
    </form>
  )
}

export default TodoForm