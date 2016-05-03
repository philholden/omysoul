import React from 'react'
import { withRouter } from 'react-router'
import SongStoreListContainer from './song-store-list-container'
import {
  Card,
  ButtonBar
} from '../layouts/card'

import Button from '../lib/button'
import {
  NavBarSongStore
} from '../layouts/nav-bar'

const SongStoreNavScreen = ({ router }) => {

  return (
    <Card>
      <NavBarSongStore title={'Song Stores'}/>
      <SongStoreListContainer />
      <ButtonBar>
        <Button>
          Add Song Store
        </Button>
      </ButtonBar>
    </Card>
  )
}

export default withRouter(SongStoreNavScreen)
