import React from 'react'
import { render } from 'react-testing-library'
import TodoContainer from './index'

describe('<TodoContainer />', () => {
  it('should render', () => {
    const { container } = render(<TodoContainer />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})