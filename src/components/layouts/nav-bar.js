import React from 'react'
import { Row, Col } from './flex'
import * as COLOR from  '../../app/color-consts'
import * as NUMBER from '../../app/number-consts'
import { NavBar } from './card'

import * as Icon from '../lib/icons'

export const NavBarSongStore = ({
  children,
  style,
  onBack,
  ...rest
}) => {
  const _styles = [
    {
      height: 62,
      paddingLeft: NUMBER.PAGE_MARGIN_X,
      paddingRight: NUMBER.PAGE_MARGIN_X
    }
  ]

  return (
    <NavBar
      style={ _styles.concat(style) }
      {...rest}
    >
      <Back onClick={onBack}/>
      <SearchBox />
      { children }
    </NavBar>
  )
}

export const SearchBox = ({ onSubmit }) => (
  <Col
    style={{ flex: 1 }}
    element="form"
    onSubmit={onSubmit}
  >
    <Row style={styles.inputWrapper}>
      <Col align="5" style={styles.iconWrapper}>
        <Icon.Search />
      </Col>
      <input style={styles.input}/>
    </Row>
  </Col>
)

export const Back = ({ ...rest }) => (
  <Col
    style={styles.back}
    align="5"
    { ...rest }
  >
    <Icon.Back />
  </Col>
)

const styles = {
  back: {
    paddingRight: 10,
    marginLeft: -NUMBER.PAGE_MARGIN_X,
    paddingLeft: NUMBER.PAGE_MARGIN_X - 2,
    cursor: 'pointer',
    alignSelf: 'stretch'
  },
  iconWrapper: {
    paddingLeft: 5,
    paddingRight: 5
  },
  input: {
    borderWidth: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    flex: 1,
    fontSize: 17,
    outline: 'none'
  },
  inputWrapper: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#9e9e9e'
  }
}
