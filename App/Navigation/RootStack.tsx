import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainStack from './MainStack'
import ModalStack from './ModalStack'

export type RootNavigatorParams = {
  MainStack: undefined
  ModalStack: undefined
}

const Stack = createStackNavigator<RootNavigatorParams>()

export const RootStack = (): JSX.Element => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="MainStack" component={MainStack} options={{ headerShown: false }} />
      <Stack.Screen name="ModalStack" component={ModalStack} />
    </Stack.Navigator>
  )
}
