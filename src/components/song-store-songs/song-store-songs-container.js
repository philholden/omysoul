import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { List } from '../layouts/list'
import ItemInSongStoreSongsContainer
  from './item-in-song-store-songs-container'
import { withRouter } from 'react-router'

const SongStoreSongs = ({
  songs,
  songStoreId
}) => {
  return (
    <List>
      {
        songs.map(({ id }) => (
          <ItemInSongStoreSongsContainer
            songStoreId={songStoreId}
            songId={id}
            key={id}
          />
        ))
      }
    </List>
  )
}

const mapStateToProps = ({ songStores }, { songStoreId }) => {
  const songStore = songStores && songStores[songStoreId]
  return ({
    songStoreId,
    songs: songStore ? Object.values(songStore.songs): []
  })
}

const SongStoreSongsContainer = withRouter(
  connect(
    mapStateToProps,
    null
  ) (SongStoreSongs)
)

export default SongStoreSongsContainer
