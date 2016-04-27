import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { generateKeys } from '../api'

import {
  addReduxSwarmLog,
  removeReduxSwarmLog
} from '@philholden/redux-swarmlog'

import {
  ADD_SETLIST,
  REMOVE_SETLIST,
  addSetlistSucceeded,
  removeSetlistSucceeded
} from './setlist-actions'

function *addSetlist() {
  yield* takeEvery(ADD_SETLIST, getKeys)
}

function *getKeys(action) {
  let swarmLogMeta = action.swarmLogMeta || {}
  if (!action.swarmLogMeta.keys) {
    swarmLogMeta.keys = yield call(generateKeys)
    //swarmLogMeta.id = `${swarmLogMeta.name.replace(/\s/g,'_')}-${swarmLogMeta.keys.public}`
  }
  yield addReduxSwarmLog(swarmLogMeta)
  yield put(addSetlistSucceeded(swarmLogMeta))
}

function *removeSetlist() {
  yield* takeEvery(REMOVE_SETLIST, removeSetlistFromDb)
}

function *removeSetlistFromDb(action) {
  yield removeReduxSwarmLog(action.songStoreId)
  yield put(removeSetlistSucceeded(action.songStoreId))
}

export default [
  addSetlist,
  removeSetlist
]

