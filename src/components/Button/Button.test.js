import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Button from './index'

describe('<Button />', () => {
  it('should render', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should fire onClick handler when clicked', () => {
    const onClick = jest.fn()
    const { container } = render(<Button onClick={onClick} />)
    fireEvent.click(container.firstChild)
    expect(onClick).toHaveBeenCalled()
  });
})