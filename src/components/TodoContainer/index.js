import React, { useReducer, useEffect } from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import Title from '../Title'
import './styles.css'

const TodoContainer = () => {
  // fetch todoList from localStorage if it exists
  const initialState = { todoList: JSON.parse(localStorage.getItem('todoList')) || [] }

  // reducer to handle our state changes
  // created reducer to mirror setState behavior of class components
  const reducer = (state, newState) => ({ ...state, ...newState })
  const [state, setState] = useReducer(reducer, initialState)

  // push new task to todoList
  const handleTaskAdd = (task) => {
    if (task.length > 0) {
      const currentTodoList = [...state.todoList]
      const newTodo = { task, isCompleted: false }
      currentTodoList.push(newTodo)
      setState({ todoList: currentTodoList })
    }
  }

  // update todoList to only contain incomplete tasks
  const deleteCompletedTasks = () => {
    const currentTodoList = [...state.todoList]
    const remainingTasks = []
    for (let todo of currentTodoList) {
      // if the todo is not marked as complete, push to remaining tasks array
      if (!todo.isComplete) {
        remainingTasks.push(todo)
      }
    }
    // update todoList with remaingTasks array
    setState({ todoList: remainingTasks })
  }

  // toggle isComplete boolean for specified task
  const toggleTaskCompletion = (taskIndex) => {
    const currentTodoList = [...state.todoList]
    currentTodoList[taskIndex].isComplete = !currentTodoList[taskIndex].isComplete
    setState({ todoList: currentTodoList })
  }

  const hydrateTodoListFromLocalStorage = () => {
    if (localStorage.hasOwnProperty('todoList')) {
      const todoList = localStorage.getItem('todoList')
      try {
        setState({ todoList: JSON.parse(todoList) })
      } catch (error) {
        setState({ todoList: [] })
      }
    }
  }

  useEffect(() => {
    // whenever our state is updated, sync localStorage with app state
    localStorage.setItem('todoList', JSON.stringify(state.todoList))
  }, [state])

  const { todoList } = state
  const numTasks = todoList.length
  return (
    <div className='container'>
      <Title numTasks={numTasks} />
      <TodoForm handleTaskAdd={handleTaskAdd} />
      <TodoList
        todos={todoList}
        toggleTaskCompletion={toggleTaskCompletion}
        numTasks={numTasks}
        deleteCompletedTasks={deleteCompletedTasks}
      />
    </div>
  )
}

export default TodoContainer