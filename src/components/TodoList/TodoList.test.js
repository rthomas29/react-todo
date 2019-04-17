import React from 'react'
import { render } from 'react-testing-library'
import TodoList from './index'

describe('<TodoList />', () => {
  it('should match snapshot', () => {
    const todos = [{ task: 'task 1', isComplete: false }, { task: 'task 2', isComplete: false }]
    const { container } = render(<TodoList todos={todos} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})