import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app/app'
import rootReducer from './app/root-reducer'
import { generateKeys } from './api'
import * as _actions from './song-store/song-store-actions'
import sagaMiddleware from './app/saga-middleware'
import { bindActionCreators } from 'redux'
import { routes, history } from './components/app/routes'
import {
  Router
} from 'react-router'

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import {
  configureReduxSwarmLog,
  reduxSwarmLogMiddleware,
  getSwarmLogsFromDb
} from '@philholden/redux-swarmlog'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      reduxSwarmLogMiddleware,
      sagaMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const actions = bindActionCreators(_actions, store.dispatch)

window.actions = actions
window.dispatch = store.dispatch

configureReduxSwarmLog({
  reduxStore: store,
  generateKeys,
  logSampleActions,
  logLevel: 1
})

getSwarmLogsFromDb()
  .then(reduxSwarmLogs => {
    if (reduxSwarmLogs.length === 0) {
      actions.addSongStore({ name: 'My Songs' })
    } else {
      reduxSwarmLogs.forEach(actions.addSongStore)
    }
  })

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
    </div>
  </Provider>,
  document.getElementById('root')
)

function logSampleActions({ id, keys, name }) {
  console.log(
`
%cthe following actions can be dispatched from the console:

%c// clone song store over rtc on remote machine or in incognito window
%cactions.addSongStore({
  name: '${name} Clone',
  keys: {
    public: '${keys.public}',
    private: '${keys.private}'
  }
})

%c// add song
%cactions.putSongInSongStore('${id}', {id: 'hello', text: 'world'})

%c// remove song
%cactions.removeSongFromSongStore('${id}', 'hello')

%c// add new local song store
%cactions.addSongStore({ name: 'New Song Store' })

%c// remove song store
%cactions.removeSongStore('${id}')

`,
'font-weight: bold',
'font-style: italic; color: #888',
'color: #559',
'font-style: italic; color: #888',
'color: #559',
'font-style: italic; color: #888',
'color: #559',
'font-style: italic; color: #888',
'color: #559',
'font-style: italic; color: #888',
'color: #559'
)
}
