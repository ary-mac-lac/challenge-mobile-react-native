import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ListingFeature from '../Features/Listing'

export type MainNavigatorParams = {
  ListingScreen: undefined
}

const Stack = createStackNavigator<MainNavigatorParams>()

export const MainStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListingScreen" component={ListingFeature.screens.full.listing} />
    </Stack.Navigator>
  )
}

export default MainStack
