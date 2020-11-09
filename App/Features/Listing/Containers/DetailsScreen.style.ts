import { StyleSheet } from 'react-native'
import { MODAL_HEIGHT } from '../../../Constants/Navigation'

export default () =>
  StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    modal: {
      backgroundColor: '#FFF',
      height: MODAL_HEIGHT,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 16,
    },
    content: {
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    sectionHeader: {
      fontWeight: '700',
      fontSize: 24,
      color: '#000',
      marginBottom: 16,
      marginTop: 36,
    },
    bullet: {
      backgroundColor: '#222',
      aspectRatio: 1,
      height: 4,
      borderRadius: 2,
      marginRight: 8,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    separator: {
      width: '95%',
      marginVertical: 16,
    },
    header: {
      textAlign: 'left',
      flex: 1,
      fontSize: 18,
      fontWeight: '600',
      color: '#000',
      marginHorizontal: 16,
      height: 22,
    },
    headerSeparator: {
      width: '100%',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    item: {
      flex: 1,
      letterSpacing: 0.15,
      lineHeight: 23,
    },
    description: {
      lineHeight: 23,
      letterSpacing: 0.15,
    },
  })
