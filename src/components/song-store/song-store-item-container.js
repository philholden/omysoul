import { connect } from 'react-redux'
import { ItemInSongStores } from '../layouts/list'
import {
  removeSongStore
} from '../../song-store/song-store-actions'

const mapStateToProps = ({ songStores }, { id }) => {
  const { swarmLogMeta } = songStores[id]
  console.log(swarmLogMeta)
  return {
    ...swarmLogMeta
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  onRemove: () => dispatch(removeSongStore(id)),
  onClick: () => alert(id)
})

const ItemInSongStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (ItemInSongStores)

export default ItemInSongStoreContainer

