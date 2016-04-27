import React from 'react'
import Radium from 'radium'
import SongStoreListContainer from './song-store-list-container'
import Button from '../lib/button'
import NavBar from '../lib/nav-bar'

const SongStoreNavScreen = Radium((props) => {
  const {
    name,
    isSelected,
    history,
    ...rest
  } = props

  const onClick = () => history.push('/songstore/1')

  return (
    <div style={styles.outer}>
      <div style={styles.top}>
        <NavBar title={'Song Stores'} style={styles.list}/>
      </div>
      <div style={styles.mid}>
        <SongStoreListContainer />
      </div>
      <div style={styles.bottom}>
        <Button onClick={onClick}>
          Add Song Store
        </Button>
      </div>
    </div>
  )
})

const styles = {
  list: {
//    paddingTop: 45
  },
  outer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  top: {
    height: 45
  },
  mid: {
    flex: 1,
    overflow: 'auto'
  },
  bottom: {
    borderTop: '1px solid #ccc',
    padding: '20px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
}

export default SongStoreNavScreen
