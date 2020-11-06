import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ListingFeature from '../Features/Listing'

export type RootNavigatorParams = {
  ListingScreen: undefined
}

const Stack = createStackNavigator<RootNavigatorParams>()

export const RootStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListingScreen" component={ListingFeature.screens.ExampleScreen} />
    </Stack.Navigator>
  )
}
