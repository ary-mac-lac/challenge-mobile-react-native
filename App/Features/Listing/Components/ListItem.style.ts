import { StyleSheet } from 'react-native'

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 16,
      marginVertical: 16,
      paddingVertical: 10,
      alignItems: 'center',
      height: 110,
      backgroundColor: '#FEFEFE',
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
    },
    description: {
      flex: 1,
      marginTop: 16,
      lineHeight: 20,
    },
    unavailable: {
      color: '#AAA',
      lineHeight: 20,
      marginTop: 8,
    },
    textContainer: {
      marginLeft: 20,
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    icon: {
      marginLeft: 8,
    },
  })
