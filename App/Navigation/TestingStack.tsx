import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TestingScreen from '../Containers/TestingScreen'

export type TestStackParams = {
  Testing: undefined
}

const Stack = createStackNavigator<TestStackParams>()

export const TestingStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}>
      <Stack.Screen name="Testing" component={TestingScreen} />
    </Stack.Navigator>
  )
}
