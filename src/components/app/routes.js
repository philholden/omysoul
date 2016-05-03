import React from 'react'
import {
  Router, Route, IndexRoute,
  Link,
  createMemoryHistory,
  hashHistory,
  browserHistory
} from 'react-router'

import SongStoreNavScreen from '../song-store/song-store-nav-screen'
import SongStoreSongsNavScreen from '../song-store-songs/song-store-songs-nav-screen'
const App = require('./app').default

console.log('app', App)

export const history = hashHistory

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SongStoreNavScreen} />
    <Route path="/songstore/:songStoreId" component={SongStoreSongsNavScreen} />
  </Route>
)


//    <Route path="/" component={}>
//      <IndexRoute component={SongStoreNavScreen} />
//      <Route path="/:demo" component={Demo} />
//    </Route>
