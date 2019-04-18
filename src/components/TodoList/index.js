import React from 'react'
import Button from '../Button'
import './styles.css'

const TodoList = ({
  todos,
  handleTaskDelete,
  toggleTaskCompletion,
  deleteCompletedTasks,
  toggleAllTasksCompletion,
  allMarkedComplete,
  numTasks
}) => {
  const markedCompleteBtnText = allMarkedComplete ? 'Unselect tasks' : 'Select all tasks'
  return (
    <main className='list-container'>
      {
        todos.map((todo, i) => {
          const listNumber = i + 1
          const key = `${i}:${todo.task}`
          const style = todo.isComplete ? { textDecoration: 'line-through' } : {}
          const isChecked = todo.isComplete ? todo.isComplete : false
          return (
            <div
              key={key}
              className='list-container'
            >
              <div className='list-item'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  checked={isChecked}
                  onChange={() => toggleTaskCompletion(i)}
                />
                <p style={style}>
                  {`${listNumber}. ${todo.task}`}
                </p>
              </div>
            </div>
          )
        })
      }
      {numTasks > 0 &&
        <div className='btn-group'>
          <Button className='btn btn-sm btn-danger' onClick={deleteCompletedTasks}>
            Clear completed tasks
          </Button>
          <Button className='btn btn-sm btn-info' onClick={toggleAllTasksCompletion}>{markedCompleteBtnText}</Button>
        </div>
      }
    </main>
  )
}

export default TodoList