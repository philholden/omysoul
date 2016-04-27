import React from 'react'
import { connect } from 'react-redux'
import SongStoreItem from './song-store-item'
import {
  removeSongStore
} from '../../song-store/song-store-actions'

const mapStateToProps = ({ songStores }, { id }) => {
  const { swarmLogMeta } = songStores[id]
  return {
    ...swarmLogMeta
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  onRemove: () => dispatch(removeSongStore(id))
})

const SongStoreItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (SongStoreItem)

export default SongStoreItemContainer

