import React from 'react'
import SongStoreSongsContainer from './song-store-songs-container'
import {
  Card,
  ButtonBar
} from '../layouts/card'

import Button from '../lib/button'
import {
  NavBarSongStore
} from '../layouts/nav-bar'
import { withRouter } from 'react-router'

const SongStoreSongsNavScreen = ({
  router,
  routeParams: { songStoreId }
}) => {
  console.log(router)
  return (
    <Card>
      <NavBarSongStore
        title={'Song Stores'}
        onBack={router.goBack}
      />
      <SongStoreSongsContainer songStoreId={songStoreId}/>
      <ButtonBar>
        <Button>
          Add Song
        </Button>
      </ButtonBar>
    </Card>
  )
}

export default withRouter(SongStoreSongsNavScreen)
