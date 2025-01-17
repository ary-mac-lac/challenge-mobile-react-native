import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Character } from '../Entities'
import ListingFeature from '../Features/Listing'

export type ModalNavigatorParams = {
  DetailsScreen: { character: Character; attribution: string }
}

const Stack = createStackNavigator<ModalNavigatorParams>()

export const ModalStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}>
      <Stack.Screen name="DetailsScreen" component={ListingFeature.screens.modals.details} />
    </Stack.Navigator>
  )
}

export default ModalStack
