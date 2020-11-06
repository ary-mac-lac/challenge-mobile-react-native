import { StyleSheet } from 'react-native'
import { addOpacity } from '../Utils'

export const DEFAULT_OPACITY = 0.5
export const DEFAULT_COLOR = '#555555'

export default () =>
  StyleSheet.create({
    container: {
      height: 1,
      backgroundColor: addOpacity(DEFAULT_COLOR, DEFAULT_OPACITY),
      width: '100%',
    },
  })
