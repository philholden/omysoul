import React from 'react'
import Radium from 'radium'

export const FullScreen = Radium(({
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
    <div
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </div>
  )
})

export const Row = Radium(({
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
    <div
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </div>
  )
})

export const Col = Radium(({
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
    <div
      style={ _styles.concat(style)}
      {...rest}
    >
      { children }
    </div>
  )
})

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
