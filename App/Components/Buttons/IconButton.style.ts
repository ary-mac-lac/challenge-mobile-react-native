import { StyleSheet } from 'react-native'

export default () =>
  StyleSheet.create({
    container: {
      height: 45,
      aspectRatio: 1,
      width: 44,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  })
