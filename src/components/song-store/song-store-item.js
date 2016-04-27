import React from 'react'
import Radium from 'radium'
import ListItemWrapper from '../lib/list-item-wrapper'
import ListItemCol from '../lib/list-item-col'
import {
  KEY_COLOR,
  TEXT_LIGHT,
  TEXT_DARK
} from '../../app/color-consts'

const ListItem = Radium((props) => {
  const {
    name,
    isSelected,
    ...rest
  } = props

  return (
    <ListItemWrapper {...rest} >
      <ListItemCol style={{ width: 16 }} />
      <ListItemCol style={{ flex: 1 }}>
        <div
          style={[ styles.title, isSelected && styles.selected ]}
        >
          {name}
        </div>
      </ListItemCol>
      <ListItemCol style={{ color: '#ed603b' }}>
        <svg fill="currentColor" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </ListItemCol>
    </ListItemWrapper>
  )
})

const styles = {
  title: {
    fontSize: 18,
    fontWeight: 600,
//    width: 'calc(100vw - 50px)',
    boxSizing: 'border-box',
    color: TEXT_DARK,
//    marginBottom: 6,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  subtitle: {
    fontWeight: 300,
    fontSize: 12,
    color: '#9e9e9e'
  },
  selected: {
    color: KEY_COLOR
  }
}

export default ListItem
