import React, { Fragment } from 'react'

const Button = ({
  className = 'btn btn-primary',
  type = 'button',
  onClick = () => { },
  style = {},
  children
}) => {
  return (
    <Fragment>
      <button type={type} className={className} style={style} onClick={() => onClick()}>
        {children}
      </button>
    </Fragment>
  )
}

export default Button