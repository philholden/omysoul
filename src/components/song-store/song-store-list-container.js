import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { List } from '../layouts/list'
import SongStoreItemContainer
  from './song-store-item-container'

const SongStoreList = ({
  songStores
}) => {
  return (
    <List>
      { songStores.map(({ id }) => (
          <SongStoreItemContainer id={id} key={id} />
        ))
      }
    </List>
  )
}

const mapStateToProps = ({ songStores }) => ({
  songStores: Object.keys(songStores)
    .map(key => ({
      ...songStores[key].swarmLogMeta
    }))
})

const SongStoreListContainer = connect(
  mapStateToProps,
  null
) (SongStoreList)

export default SongStoreListContainer
