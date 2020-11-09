import { StyleSheet } from 'react-native'

export default () =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      marginHorizontal: 16,
    },
    favoriteFilter: {
      flex: 0,
    },
    searchField: {
      flex: 1,
      marginRight: 8,
    },
    separator: {
      width: '100%',
      height: 2,
    },
  })
