import React, { Component } from 'react'
import Radium from 'radium'

export const FullScreen = ({
  children,
  flex,
  style,
  ...rest
}) => {
  const _styles = [
    {
      width: '100vw',
      height: '100vh'
    },
    (flex === 'row' || flex === 'column') &&
    {
      display: 'flex',
      flexDirection: flex
    }
  ]

  return (
    <Element
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </Element>
  )
}

export const Row = ({
  children,
  style,
  align,
  ...rest
}) => {
  const _styles = [
    { display: 'flex' },
    align && align >= 1 && align <= 9 &&
    {
      alignItems: rowAlignItems(align),
      justifyContent: rowJustifyContent(align)
    }
  ]

  return (
    <Element
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </Element>
  )
}

export const Col = ({
  children,
  style,
  align,
  ...rest
}) => {
  const _styles = [
    {
      display: 'flex',
      flexDirection: 'column'
    },
    align && align >= 1 && align <= 9 &&
    {
      alignItems: colAlignItems(align),
      justifyContent: colJustifyContent(align)
    }
  ]

  return (
    <Element
      style={ _styles.concat(style)}
      {...rest}
    >
      { children }
    </Element>
  )
}

class _Element extends Component {
  static defaultProps = {
    element: 'div'
  };

  render() {
    const {
      element,
      children,
      ...rest
    } = this.props

    return React.createElement(
      element,
      rest,
      children
    )
  }
}

export const Element = Radium(_Element)

const rowAlignItems = numpad => [
  'flex-start',
  'center',
  'flex-end'
][(numpad - 1) % 3]

const rowJustifyContent = numpad => [
  'flex-end',
  'center',
  'flex-start'
][((numpad - 1) / 3) | 0]

const colAlignItems = rowJustifyContent
const colJustifyContent = rowAlignItems
