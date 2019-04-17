import React, { Fragment } from 'react'

const Button = ({ className = 'btn btn-primary', type = 'button', onClick = () => { }, children }) => {
  return (
    <Fragment>
      <button type={type} className={className} onClick={() => onClick()}>
        {children}
      </button>
    </Fragment>
  )
}

export default Button