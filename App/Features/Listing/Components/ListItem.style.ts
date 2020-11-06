import { StyleSheet } from 'react-native'

const IMG_SIZE = 70

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 16,
      marginVertical: 16,
      alignItems: 'center',
      height: 100,
      backgroundColor: 'orange',
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
    },
    description: {
      flex: 1,
      marginTop: 8,
      backgroundColor: 'white',
    },
    image: {
      aspectRatio: 1,
      height: IMG_SIZE,
      borderRadius: IMG_SIZE / 2,
    },
    textContainer: {
      marginLeft: 16,
      flexShrink: 1,
      backgroundColor: 'pink',
    },
  })
