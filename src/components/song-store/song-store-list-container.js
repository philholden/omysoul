import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { List } from '../layouts/list'
import ItemInSongStoresContainer
  from './item-in-song-stores-container'

const SongStoreList = ({
  songStores
}) => {
  return (
    <List>
      { songStores.map(({ id }) => (
          <ItemInSongStoresContainer
            songStoreId={id}
            key={id}
          />
        ))
      }
    </List>
  )
}

const mapStateToProps = ({ songStores }, { history }) => ({
  songStores: Object.keys(songStores)
    .map(songStoreId => ({
      ...songStores[songStoreId].swarmLogMeta,
      onClick: () =>
        history.push(`/songstore/${songStoreId}`)
    }))
})

const SongStoreListContainer = connect(
  mapStateToProps,
  null
) (SongStoreList)

export default SongStoreListContainer
