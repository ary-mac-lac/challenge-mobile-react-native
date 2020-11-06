import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import getStyles from './Separator.style'

export interface Props {
  color?: string
  style?: StyleProp<ViewStyle>
}

const Separator: React.FC<Props> = ({ color, style }) => {
  const styles = getStyles()
  return <View testID={'separator'} style={[styles.container, style, !!color && { backgroundColor: color }]} />
}

export default Separator
