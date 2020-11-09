import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { addOpacity, forFadeAnimation, forSlideFromBottomAnimation } from '../Utils'
import { MDOAL_GESTURE_RESPONSE_DISTANCE } from '../Constants/Navigation'

import MainStack from './MainStack'
import ModalStack from './ModalStack'

export type RootNavigatorParams = {
  MainStack: undefined
  ModalStack: undefined
}

const Stack = createStackNavigator<RootNavigatorParams>()

export const RootStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current, layouts }) => {
          const { progress } = current
          const { screen } = layouts
          const opacity = forFadeAnimation(progress)
          const translateY = forSlideFromBottomAnimation(progress, screen.height)

          return {
            cardStyle: { transform: [{ translateY }] },
            overlayStyle: {
              backgroundColor: addOpacity('#000000', 0.5),
              opacity,
            },
          }
        },
      }}>
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen
        name="ModalStack"
        component={ModalStack}
        options={{
          gestureResponseDistance: { vertical: MDOAL_GESTURE_RESPONSE_DISTANCE },
        }}
      />
    </Stack.Navigator>
  )
}
