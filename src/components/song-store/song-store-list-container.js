import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SongStoreItemContainer
  from './song-store-item-container'

const SongStoreList = ({
  songStores
}) => {
  return (
    <div>
      { songStores.map(({ id }) => (
          <SongStoreItemContainer id={id} key={id} />
        ))
      }
    </div>
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

const styles = {
  songStoreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif'
  },
  inputWrapper: {
    margin: '6px 0'
  }
}
