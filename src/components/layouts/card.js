import React from 'react'
import { Row, Col } from './flex'
import Radium from 'radium'
import * as COLOR from  '../../app/color-consts'
import * as NUMBER from '../../app/number-consts'


export const Card = Radium(({
  children,
  style,
  ...rest
}) => {
  const _styles = [
    {
      flex: 1,
      fontFamily: 'sans-serif',
      color: COLOR.TEXT_DARK
    }
  ]

  return (
    <Col
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </Col>
  )
})

export const NavBar = Radium(({
  children,
  style,
  ...rest
}) => {
  const _styles = [
    {
      alignItems: 'center',
      color: COLOR.TEXT_LIGHT,
      backgroundColor: COLOR.NAV_BAR
    }
  ]

  return (
    <Row
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </Row>
  )
})

export const Body = Radium(({
  children,
  style,
  ...rest
}) => {
  const _styles = [
    {
      flex: 1,
      overflow: 'auto'
    }
  ]

  return (
    <Row
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </Row>
  )
})

export const ButtonBar = Radium(({
  children,
  style,
  ...rest
}) => {
  const _styles = [
    {
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: NUMBER.BUTTON_BAR_MARGIN
    }
  ]

  return (
    <Row
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </Row>
  )
})
