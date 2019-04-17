import React, { useReducer, useEffect, useRef } from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import './styles.css'

// TodoContainer will hold our app state
const TodoContainer = () => {
  const initialState = {
    inputValue: '',
    isListEmpty: false,
    todoList: [],
  }

  const reducer = (state, newState) => ({ ...state, ...newState })
  // const localStorageRef = useRef()
  const [state, setState] = useReducer(reducer, initialState)

  const handleTaskAdd = (task) => {
    if (task.length > 0) {
      const currentTodoList = [...state.todoList]
      const newTodo = { task, isCompleted: false }
      currentTodoList.push(newTodo)
      setState({ todoList: currentTodoList })
      // localStorage.setItem('todoList', JSON.stringify(currentTodoList))
    }
  }

  const deleteCompletedTasks = () => {
    const currentTodoList = [...state.todoList]
    const remainingTasks = []
    for (let todo of currentTodoList) {
      // if the todo is not marked as complete, push to remaining tasks
      if (!todo.isComplete) {
        remainingTasks.push(todo)
      }
    }
    // update todoList with remaingTasks array
    setState({ todoList: remainingTasks })
    // localStorage.setItem('todoList', JSON.stringify(remainingTasks))
  }

  const toggleTaskCompletion = (taskIndex) => {
    const currentTodoList = [...state.todoList]
    currentTodoList[taskIndex].isComplete = !currentTodoList[taskIndex].isComplete
    setState({ todoList: currentTodoList })
    // localStorage.setItem('todoList', JSON.stringify(state.currentTodoList))
  }

  const getHeaderTitle = (numTasks) => {
    if (numTasks > 0) {
      if (numTasks === 1) {
        return `${numTasks} task remaining`
      } else {
        return `${numTasks} tasks remaining`
      }
    } else {
      return 'No tasks remaining 🤗'
    }
  }
  useEffect(() => {
  })
  const { todoList } = state
  const numTasks = todoList.length
  const headerTitle = getHeaderTitle(numTasks)
  // console.log(localStorageRef.current)
  return (
    <div className='container'>
      <h2>{headerTitle}</h2>
      <TodoForm handleTaskAdd={handleTaskAdd} />
      <TodoList todos={todoList} toggleTaskCompletion={toggleTaskCompletion} />
      {numTasks > 0 && <button className='btn btn-danger' onClick={() => deleteCompletedTasks()}>Clear completed tasks</button>}
    </div>
  )
}

export default TodoContainer