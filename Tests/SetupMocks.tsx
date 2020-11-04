import React from 'react'

jest.mock('@react-native-community/async-storage', () => ({
  default: jest.fn(),
}))

jest.mock('@react-native-community/masked-view', () => ({
  default: jest.fn(),
}))

jest.mock('react-native-gesture-handler', () => ({
  Directions: jest.fn(),
}))

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity.js', () => {
  const TouchableHighlight = jest.requireActual('react-native/Libraries/Components/Touchable/TouchableHighlight')
  const MockTouchable = (props: any) => {
    return <TouchableHighlight {...props} />
  }
  MockTouchable.displayName = 'TouchableOpacity'
  return MockTouchable
})

jest.mock('react-native/Libraries/Components/Touchable/TouchableHighlight', () => {
  const TouchableHighlight = jest.requireActual('react-native/Libraries/Components/Touchable/TouchableHighlight')
  TouchableHighlight.displayName = 'TouchableHighlight'
  return TouchableHighlight
})
