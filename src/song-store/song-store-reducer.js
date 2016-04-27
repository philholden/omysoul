import {
  ADD_SONG_STORE_SUCCEEDED,
  REMOVE_SONG_STORE_SUCCEEDED,
  PUT_SONG_IN_SONG_STORE,
  REMOVE_SONG_FROM_SONG_STORE
} from './song-store-actions'

export default function songStores(state = {}, action) {
  switch (action.type) {
    case ADD_SONG_STORE_SUCCEEDED:
      return {
        ...state,
        [action.swarmLogMeta.id]: {
          swarmLogMeta: { ...action.swarmLogMeta },
          songs: {}
        }
      }
    case REMOVE_SONG_STORE_SUCCEEDED: {
      const songStores = { ...state }
      delete songStores[action.songStoreId]
      return songStores
    }
    case PUT_SONG_IN_SONG_STORE:
    case REMOVE_SONG_FROM_SONG_STORE:
      return {
        ...state,
        [action.songStoreId]: songStore(state[action.songStoreId], action)
      }
    default:
      return state
  }
}

function songStore(state = {}, action) {
  const songs = { ...state.songs }
  switch (action.type) {
    case PUT_SONG_IN_SONG_STORE:
      return {
        ...state,
        songs: {
          ...songs,
          [action.song.id]: action.song
        }
      }
    case REMOVE_SONG_FROM_SONG_STORE: {
      delete songs[action.songId]
      return { ...state, songs }
    }
    default:
      return state
  }
}

export function getSong(state, songStoreId, songId) {
  return state.songStores[songStoreId][songId]
}
