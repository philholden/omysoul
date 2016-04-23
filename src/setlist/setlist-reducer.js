import {
  ADD_SETLIST_SUCCEEDED,
  REMOVE_SETLIST_SUCCEEDED,
  PUT_SONG_IN_SETLIST,
  REMOVE_SONG_FROM_SETLIST,
  SET_SETLIST_DISPLAY
} from '../actions/index'

export default function setlists(state = {}, action) {
  switch (action.type) {
    case ADD_SETLIST_SUCCEEDED:
      console.log(action, action.swarmLogMeta.id,action.swarmLogMeta)
      return {
        ...state,
        [action.swarmLogMeta.id]: {
          swarmLogMeta: { ...action.swarmLogMeta },
          songs: {}
        }
      }
    case REMOVE_SETLIST_SUCCEEDED: {
      const setlists = { ...state }
      delete setlists[action.setlistId]
      return setlists
    }
    case PUT_SONG_IN_SETLIST:
    case REMOVE_SONG_FROM_SETLIST:
      return {
        ...state,
        [action.setlistId]: setlist(state[action.setlistId], action)
      }
    default:
      return state
  }
}

function setlist(state = {}, action) {
  const songs = { ...state.songs }
  const display = { ...state.display }
  switch (action.type) {
    case PUT_SONG_IN_SETLIST:
      return {
        ...state,
        songs: {
          ...songs,
          [action.song.id]: action.song
        }
      }
    case REMOVE_SONG_FROM_SETLIST: {
      delete songs[action.songId]
      return { ...state, songs }
    }
    case SET_SETLIST_DISPLAY: {
      return {
        ...state,
        display: {
          ...state.display,
          ...action.display
        }
      }
    }
    default:
      return state
  }
}

export function getSong(state, setlistId, songId) {
  return state.setlists[setlistId][songId]
}
