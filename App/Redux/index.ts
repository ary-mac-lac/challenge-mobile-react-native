import { createSlice } from '@reduxjs/toolkit'
import { Persistor } from 'redux-persist'
import { Store } from 'redux'
import { updateReducers } from '../Config/ReduxPersist'
import configureStore from './configureStore'

const slice = createSlice({
  name: 'root',
  initialState: null,
  reducers: {},
})

export const rootReducer = slice.reducer

export default (): {
  store: Store<GlobalState, any>
  persistor: Persistor
} => {
  const store = configureStore({ rootReducer })
  const persistor = updateReducers(store)
  return { store, persistor }
}

export type GlobalState = ReturnType<typeof rootReducer>
