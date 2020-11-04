/*
 * This container holds only PROVIDERS.
 * Any configuration should be done in ConfigContainer, from where all data provided is available.
 */

import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { ConfigContainer } from './ConfigContainer'
import { NavigationRef } from '../Services/Navigation'

export const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={NavigationRef}>
        <ConfigContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
