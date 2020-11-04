/*
 * This container holds only PROVIDERS.
 * Any configuration should be done in ConfigContainer, from where all data provided is available.
 */

import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import configureStore from '../Redux'
import { ConfigContainer } from './ConfigContainer'
import { NavigationRef } from '../Services/Navigation'

const { store, persistor } = configureStore()

const queryCache = new QueryCache()

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin(queryCache)
  })
}

export const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={<ActivityIndicator size="large" style={styles.loading} />}>
          <ReactQueryCacheProvider queryCache={queryCache}>
            <NavigationContainer ref={NavigationRef}>
              <ConfigContainer />
            </NavigationContainer>
          </ReactQueryCacheProvider>
        </PersistGate>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
