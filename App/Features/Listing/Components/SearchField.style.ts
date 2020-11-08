import { StyleSheet } from 'react-native'

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    input: {
      flex: 1,
      height: 44,
      marginLeft: 8,
      borderRadius: 100,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 44,
      aspectRatio: 1,
      borderRadius: 100,
      borderColor: '#DFDFDF',
      borderWidth: 1,
    },
    icon: {},
  })
