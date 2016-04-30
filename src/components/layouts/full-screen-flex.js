import React from 'react'
import Radium from 'radium'

const FullScreenFlex = Radium((props) => {
  const { children, style, ...rest } = props

  return (
    <div
      style={ [ styles, style ] }
      {...rest}
    >
      { children }
    </div>
  )
})

const styles = {
  display: 'flex',
  width: '100vw',
  height: '100vh'
}

export default FullScreenFlex
