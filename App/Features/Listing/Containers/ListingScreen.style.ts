import { StyleSheet } from 'react-native'

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFF',
    },
    attribution: {
      textAlign: 'center',
      lineHeight: 30,
      color: '#444',
      fontSize: 12,
      letterSpacing: 0.6,
    },
    attributionSeparator: {
      width: '100%',
    },
  })
