import React, { useReducer, useEffect } from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import Title from '../Title'
import './styles.css'

const TodoContainer = () => {
  const initialState = {
    // fetch todoList from localStorage if it exists
    todoList: JSON.parse(localStorage.getItem('todoList')) || [],
    allMarkedComplete: false
  }

  // reducer to handle our state changes
  // created reducer to mirror setState behavior of class components
  const reducer = (state, newState) => ({ ...state, ...newState })
  const [state, setState] = useReducer(reducer, initialState)

  // push new task to todoList
  const handleTaskAdd = (task) => {
    if (task.length > 0) {
      const currentTodoList = [...state.todoList]
      const newTodo = { task, isComplete: false }
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
    if (remainingTasks.length === 0) {
      setState({ todoList: remainingTasks, allMarkedComplete: false })
    } else {
      setState({ todoList: remainingTasks })
    }
  }

  // toggle isComplete boolean for specified task
  const toggleTaskCompletion = (taskIndex) => {
    const currentTodoList = [...state.todoList]
    currentTodoList[taskIndex].isComplete = !currentTodoList[taskIndex].isComplete
    setState({ todoList: currentTodoList })
  }

  // toggle isComplete boolean for all tasks
  const toggleAllTasksCompletion = () => {
    const currentTodoList = [...state.todoList]
    let allMarkedComplete = state.allMarkedComplete
    for (let todo of currentTodoList) {
      if (allMarkedComplete) {
        todo.isComplete = false
      } else {
        todo.isComplete = true
      }
    }
    allMarkedComplete = !allMarkedComplete
    setState({ todoList: currentTodoList, allMarkedComplete })
  }

  useEffect(() => {
    // whenever our state is updated, sync localStorage with app state
    localStorage.setItem('todoList', JSON.stringify(state.todoList))
  }, [state])

  const { todoList, allMarkedComplete } = state
  const numTasks = todoList.length
  return (
    <section className='container'>
      <Title numTasks={numTasks} />
      <TodoForm handleTaskAdd={handleTaskAdd} />
      <TodoList
        allMarkedComplete={allMarkedComplete}
        todos={todoList}
        toggleTaskCompletion={toggleTaskCompletion}
        numTasks={numTasks}
        deleteCompletedTasks={deleteCompletedTasks}
        toggleAllTasksCompletion={toggleAllTasksCompletion}
      />
    </section>
  )
}

export default TodoContainer