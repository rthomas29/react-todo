import React, { Fragment } from 'react'
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
                <span style={style}>
                  <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={() => toggleTaskCompletion(i)}
                  />
                  {`${listNumber}. ${todo.task}`}
                </span>
              </div>
            </div>
          )
        })
      }
      {numTasks > 0 &&
        <div className='btn-group'>
          <Button onClick={deleteCompletedTasks} className='clear-btn'>
            Clear completed tasks
          </Button>
          <Button onClick={toggleAllTasksCompletion} className='delete-btn'>{markedCompleteBtnText}</Button>
        </div>
      }
    </main>
  )
}

export default TodoList