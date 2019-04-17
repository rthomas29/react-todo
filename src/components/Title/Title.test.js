import React from 'react'
import { render } from 'react-testing-library'
import Title from './index'

describe('<Title />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Title />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should match snapshot accurate title if no tasks remain', () => {
    const { container } = render(<Title numTasks={0} />)
    expect(container.firstChild.innerHTML).toEqual('No tasks remaining 🤗')
  });
  it('should match snapshot accurate title if one task remains', () => {
    const { container } = render(<Title numTasks={1} />)
    expect(container.firstChild.innerHTML).toEqual('1 task remaining')
  });

  it('should match snapshot accurate title if more than one task remains', () => {
    const { container } = render(<Title numTasks={3} />)
    expect(container.firstChild.innerHTML).toEqual('3 tasks remaining')
  });
})