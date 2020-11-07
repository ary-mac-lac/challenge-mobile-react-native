import { StyleSheet } from 'react-native'
import { addOpacity } from '../../../Utils'

export default () =>
  StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'flex-end',
      backgroundColor: addOpacity('#000000', 0.2),
    },
    modal: {
      backgroundColor: '#FFF',
      height: '70%',
    },
  })
