import { Persistor } from 'redux-persist'
import { combineReducers, Store } from 'redux'
import { updateReducers } from '../Config/ReduxPersist'
import configureStore from './configureStore'

import UserFeature from '../Features/User'

export const entityReducer = combineReducers({
  user: UserFeature.reducers.entity,
})

export const rootReducer = combineReducers({
  entity: entityReducer,
})

export default (): {
  store: Store<GlobalState, any>
  persistor: Persistor
} => {
  const store = configureStore({ rootReducer })
  const persistor = updateReducers(store)
  return { store, persistor }
}

export type GlobalState = ReturnType<typeof rootReducer>
