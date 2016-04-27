import React, { Component } from 'react'
import FullScreenFlex from '../lib/full-screen-flex'
import SongStoreListContainer
  from '../../song-store/components/song-store-list-container'

export const hello = 'hello'
export default class App extends Component {
  render() {
  console.log('render', this.props)
    return (
      <div>
      <FullScreenFlex>
        { this.props.children }
      </FullScreenFlex>
      <SongStoreListContainer />
      <pre>
        {
        //  JSON.stringify(this.props.state, null, 2)
        }
      </pre>
      </div>

    )
  }
}
