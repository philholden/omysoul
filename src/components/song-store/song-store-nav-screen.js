import React from 'react'
import Radium from 'radium'
import SongStoreListContainer from './song-store-list-container'
import {
  Card,
  ButtonBar
} from '../layouts/card'

import Button from '../lib/button'
import {
  NavBarSongStore
} from '../layouts/nav-bar'

const SongStoreNavScreen = ({ history }) => {

  const onClick = () => history.push('/songstore/1')

  return (
    <Card>
      <NavBarSongStore title={'Song Stores'}/>
      <SongStoreListContainer />
      <ButtonBar>
        <Button onClick={onClick}>
          Add Song Store
        </Button>
      </ButtonBar>
    </Card>
  )
}

export default SongStoreNavScreen
