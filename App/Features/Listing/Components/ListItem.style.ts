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
      backgroundColor: '#FEFEFE',
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
    },
    description: {
      flex: 1,
      marginTop: 8,
      lineHeight: 20,
      backgroundColor: 'white',
    },
    unavailable: {
      color: '#AAA',
      lineHeight: 20,
      marginTop: 8,
    },
    image: {
      aspectRatio: 1,
      height: IMG_SIZE,
      borderRadius: IMG_SIZE / 2,
    },
    imageContainer: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    textContainer: {
      marginLeft: 20,
      flexShrink: 1,
    },
  })
