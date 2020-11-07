import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ListingFeature from '../Features/Listing'

export type ModalNavigatorParams = {
  DetailsScreen: undefined
}

const Stack = createStackNavigator<ModalNavigatorParams>()

export const ModalStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DetailsScreen" component={ListingFeature.screens.modals.details} />
    </Stack.Navigator>
  )
}

export default ModalStack
