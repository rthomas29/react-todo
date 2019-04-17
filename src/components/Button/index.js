import React, { Fragment } from 'react'

const Button = ({ className, type = 'button', onClick = () => { }, children }) => {
  return (
    <Fragment>
      <button type={type} className={className} onClick={() => onClick()}>
        {children}
      </button>
    </Fragment>
  )
}

export default Button