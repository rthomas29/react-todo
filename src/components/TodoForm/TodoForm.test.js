import React from 'react'
import { render } from 'react-testing-library'
import TodoForm from './index'

describe('<TodoForm />', () => {
  it('should render', () => {
    const { container } = render(<TodoForm />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})