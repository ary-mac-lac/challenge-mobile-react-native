import { StyleSheet } from 'react-native'

export default () =>
  StyleSheet.create({
    container: {
      height: 45,
      paddingHorizontal: 16,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      borderRadius: 10,
      alignItems: 'center',
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
    onlyIconContainer: {
      aspectRatio: 1,
      width: 44,
      borderRadius: 40,
      paddingHorizontal: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      letterSpacing: 0.4,
      fontWeight: '600',
    },
  })
