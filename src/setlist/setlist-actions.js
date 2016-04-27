export const ADD_SETLIST = 'ADD_SETLIST'
export const REMOVE_SETLIST = 'REMOVE_SETLIST'
export const PUT_SONG_IN_SETLIST = 'PUT_SONG_IN_SETLIST'
export const REMOVE_SONG_FROM_SETLIST = 'REMOVE_SONG_FROM_SETLIST'
export const ADD_SETLIST_SUCCEEDED = 'ADD_SETLIST_SUCCEEDED'
export const REMOVE_SETLIST_SUCCEEDED = 'REMOVE_SETLIST_SUCCEEDED'
export const SONG_MODE = 'SONG_MODE'
export const DISPLAY_VERSE_MODE = 'DISPLAY_VERSE_MODE'
export const setlistActions = [
  ADD_SETLIST,
  REMOVE_SETLIST,
  PUT_SONG_IN_SETLIST,
  REMOVE_SONG_FROM_SETLIST,
  ADD_SETLIST_SUCCEEDED
]

export function addSetlist(swarmLogMeta) {
  return {
    type: ADD_SETLIST,
    swarmLogMeta
  }
}

export function addSetlistSucceeded(swarmLogMeta) {
  return {
    type: ADD_SETLIST_SUCCEEDED,
    swarmLogMeta
  }
}

export function removeSetlist(setlistId) {
  return {
    type: REMOVE_SETLIST,
    setlistId
  }
}

export function removeSetlistSucceeded(setlistId) {
  return {
    type: REMOVE_SETLIST_SUCCEEDED,
    setlistId
  }
}

export function putSongInSetlist(setlistId, song) {
  return {
    type: PUT_SONG_IN_SETLIST,
    setlistId,
    song,
    reduxSwarmLogId: setlistId
  }
}

export function removeSongFromSetlist(setlistId, songId) {
  return {
    type: REMOVE_SONG_FROM_SETLIST,
    setlistId,
    songId,
    reduxSwarmLogId: setlistId
  }
}

// display: { songId, verseIndex, isBlank, mode }

export function updateSetListSongDisplayed(setlistId, display) {
  return {
    display,
    setlistId,
    reduxSwarmLogId: setlistId
  }
}
