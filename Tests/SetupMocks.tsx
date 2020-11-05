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

export default null
