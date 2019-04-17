import React from 'react'

// util function to render correct title based on num of tasks
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

const Title = ({ numTasks }) => {
  const headerTitle = getHeaderTitle(numTasks)
  return (
    <h2>{headerTitle}</h2>
  )
}

export default Title