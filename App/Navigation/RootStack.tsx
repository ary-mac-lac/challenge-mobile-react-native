import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ExampleFeature from '../Features/Example'

export type RootNavigatorParams = {
  Example: undefined
}

const Stack = createStackNavigator<RootNavigatorParams>()

export const RootStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Example" component={ExampleFeature.screens.ExampleScreen} />
    </Stack.Navigator>
  )
}
