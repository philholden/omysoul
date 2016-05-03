import { connect } from 'react-redux'
import { ItemInSongStores } from '../layouts/list'
import { withRouter } from 'react-router'
import {
  removeSongStore
} from '../../song-store/song-store-actions'

const mapStateToProps = ({ songStores }, {
  songStoreId,
  router
}) => {
  const { swarmLogMeta } = songStores[songStoreId]
  return {
    title: swarmLogMeta.name,
    onClick: () => router.push(`/songstore/${songStoreId}`)
  }
}

const mapDispatchToProps = (dispatch, { songStoreId }) => ({
  onRemove: () => dispatch(removeSongStore(songStoreId))
})

const ItemInSongStoresContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ) (ItemInSongStores)
)

export default ItemInSongStoresContainer

