import { connect } from 'react-redux'
import { ItemInSongStores } from '../layouts/list'
import { withRouter } from 'react-router'
import {
  removeSongStore
} from '../../song-store/song-store-actions'

const mapStateToProps = ({ songStores }, {
  songStoreId,
  songId,
  router
}) => {
  console.log(songStoreId, songId)
  const { songs } = songStores[songStoreId]
  const song = songs[songId]

  return {
    title: song.id,
    subtitle: song.id,
    onClick: () => router.push('/')
  }
}

const mapDispatchToProps = (dispatch, { songStoreId, songId }) => ({
//  onRemove: () => dispatch(removeSongStore(songStoreId)),
//  onClick: () => alert(songStoreId)
})

const ItemInSongStoreSongsContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
) (ItemInSongStores))

export default ItemInSongStoreSongsContainer

