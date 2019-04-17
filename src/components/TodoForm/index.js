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
    <form className='form-inline' onSubmit={(e) => handleTaskSubmit(e)}>
      <div className='form-group'>
        <label htmlFor='task-input'>Task:</label>
        <input
          id='task-input'
          type='text'
          className='form-control'
          placeholder='Enter new task here'
          aria-label='checkbox to toggle task completion'
          onChange={(e) => setInputState(e.target.value)}
          value={inputState}
          autoFocus
        />
        <Button type='submit' className='btn btn-success'>Add</Button>
      </div>
    </form>
  )
}

export default TodoForm