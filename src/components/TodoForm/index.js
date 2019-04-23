import React, { useState } from 'react'
import Button from '../Button'
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
    <form onSubmit={(e) => handleTaskSubmit(e)}>
      <div>
        <label htmlFor='task-input'>Task:</label>
        <input
          id='task-input'
          type='text'
          placeholder='Enter new task here'
          aria-label='checkbox to toggle task completion'
          onChange={(e) => setInputState(e.target.value)}
          value={inputState}
          autoFocus
        />
        <Button type='submit' className='add-btn'>Add</Button>
      </div>
    </form>
  )
}

export default TodoForm