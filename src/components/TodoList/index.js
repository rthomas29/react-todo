import React from 'react'
import './styles.css'

const TodoList = ({ todos, handleTaskDelete, toggleTaskCompletion }) => (
  <main className='list-container'>
    {todos.map((todo, i) => {
      const listNumber = i + 1
      const key = `${i}:${todo.task}`
      const style = todo.isComplete ? { textDecoration: 'line-through' } : {}
      return (
        <div
          key={key}
          className='list-container'
        >
          <div className='list-item'>
            <input type='checkbox' className='form-check-input' checked={todo.isComplete} onClick={() => toggleTaskCompletion(i)} />
            <p style={style}>
              {`${listNumber}. ${todo.task}`}
            </p>
          </div>
        </div>
      )
    })}
  </main>
)

export default TodoList