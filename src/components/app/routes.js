import React from 'react'
import {
  Route, IndexRoute
} from 'react-router'

import SongStoreNavScreen from '../song-store/song-store-nav-screen'
import SongStoreSongsNavScreen from '../song-store-songs/song-store-songs-nav-screen'
let App = require('./app').default

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SongStoreNavScreen} />
    <Route path="/songstore/:songStoreId" component={SongStoreSongsNavScreen} />
  </Route>
)

export default routes

