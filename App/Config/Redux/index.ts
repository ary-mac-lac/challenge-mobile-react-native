// @ts-nocheck -- Defining redux states make my head hurt
import { Persistor } from 'redux-persist'
import { combineReducers } from 'redux'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import createReduxFlipperMiddleware from 'redux-flipper'

import GlobalStore from './store'
import persistConfig, { updateReducers } from '../../Config/ReduxPersist'
import UserFeature from '../../Features/User'

const rootReducer = combineReducers({
  entity: combineReducers({
    user: UserFeature.reducers.entity,
  }),
})

interface CreateStoreHelper {
  store: EnhancedStore<GlobalState, any>
  persistor: Persistor
}

// Configure store with middlewares, persistors, etc.
const createStore = (): CreateStoreHelper => {
  const store = configureStore({
    reducer: persistReducer(persistConfig.rootStoreConfig, rootReducer),
    middleware: __DEV__ ? [createReduxFlipperMiddleware()] : [],
  })

  GlobalStore.set(store)
  const persistor = updateReducers(store)
  return { store, persistor }
}

export default {
  createStore,
  store: GlobalStore,
}

export type GlobalState = ReturnType<typeof rootReducer>
