import { StyleSheet } from 'react-native'

export const DEFAULT_IMG_SIZE = 70

export default () =>
  StyleSheet.create({
    image: {
      aspectRatio: 1,
      height: DEFAULT_IMG_SIZE,
      borderRadius: DEFAULT_IMG_SIZE / 2,
    },
    container: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
  })
