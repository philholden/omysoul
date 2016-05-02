import React from 'react'
import { Row, Col } from './flex'
import { Body } from './card'
import Radium from 'radium'
import * as COLOR from  '../../app/color-consts'
import * as NUMBER from  '../../app/number-consts'


export const List = Radium(({
  children,
  style,
  ...rest
}) => {
  const _styles = [
    {
      backgroundColor: COLOR.LIST_BORDER,
      flexDirection: 'column'
    }
  ]

  return (
    <Body
      style={ _styles.concat(style) }
      {...rest}
    >
      { children }
    </Body>
  )
})

export const Item = Radium(({
  children,
  style,
  isFirst,
  ...rest
}) => {
  const _styles = [
    {
      backgroundColor: COLOR.LIST_ITEM,
      paddingLeft: NUMBER.PAGE_MARGIN_X,
      paddingRight: NUMBER.PAGE_MARGIN_X,
    },
    !isFirst &&
    {
      marginTop: 1
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

export const ItemInSongStores = Radium(({
  name,
  style,
  ...rest
}) => {
  const _styles = [
    {
      cursor: 'pointer',
      height: 65
    }
  ]

  return (
    <Item
      style={ _styles.concat(style) }
      {...rest}
    >
      <Col style={styles.colTitle}>
        <div style={styles.title}>
          { name }
        </div>
        <div style={styles.subtitle}>
          subtitle
        </div>
      </Col>
    </Item>
  )
})

const styles = {
  title: {
    fontSize: 18,
    fontWeight: 600,
    width: 'calc(100vw - 50px)',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  subtitle: {
    fontWeight: 300,
    fontSize: 12,
    color: COLOR.LIST_ITEM_SUBTITLE
  },
  colTitle: {
    minWidth: 0,
    flexBasis: 0,
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: 'space-around',
    padding: '12px 0'
  }
}
