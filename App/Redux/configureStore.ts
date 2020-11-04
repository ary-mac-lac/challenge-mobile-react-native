import { configureStore, Middleware, Store, Reducer } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import persistConfig from '../Config/ReduxPersist'
import createReduxFlipperMdlw from 'redux-flipper'
import { GlobalState } from '.'

interface Configuration {
  rootReducer: Reducer<GlobalState, any>
}

export default ({ rootReducer }: Configuration): Store => {
  const reduxFlipperMiddleware = createReduxFlipperMdlw()
  const middleware: Middleware[] = []

  if (__DEV__) {
    middleware.push(reduxFlipperMiddleware)
  }

  const store = configureStore({
    // @ts-ignore
    reducer: persistReducer(persistConfig.rootStoreConfig, rootReducer),
    middleware,
  })

  return store
}
