import AsyncStorage from '@react-native-community/async-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistStore, Persistor } from 'redux-persist'
import { GlobalStore } from '../Entities'

const ReduxPersist = {
  active: true,
  reducerVersion: '0.0.2',
  rootStoreConfig: {
    key: 'primary',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  },
}

export const updateReducers = (store: GlobalStore): Persistor => {
  const reducerVersion = ReduxPersist.reducerVersion

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then((localVersion) => {
      if (localVersion !== reducerVersion) {
        if (__DEV__) {
          console.log('Reducer Version Change Detected')
        }
        // Purge store
        persistStore(store, null, () => {}).purge()
        AsyncStorage.setItem('reducerVersion', reducerVersion)
      } else {
        persistStore(store, null, () => {})
      }
    })
    .catch(() => {
      persistStore(store, null, () => {})
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    })

  return persistStore(store)
}

export default ReduxPersist
