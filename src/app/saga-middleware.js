import createSagaMiddleware from 'redux-saga'
import songStoreSagas from '../song-store/song-store-sagas'

export const sagaMiddleware = createSagaMiddleware(
  ...songStoreSagas
)

export default sagaMiddleware
