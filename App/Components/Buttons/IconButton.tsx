import React from 'react'
import { AccessibilityRole, AccessibilityState, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import getStyles from './IconButton.style'

interface Props {
  onPress: () => void
  icon: 'star' | 'star-outline'
  style?: StyleProp<ViewStyle>
  accessibilityState?: AccessibilityState
  accessibilityLabel?: string
  accessibilityHint?: string
  accessibilityRole?: AccessibilityRole
}

const IconButton: React.FC<Props> = ({ onPress, icon, style, ...accessibilityRelated }) => {
  const styles = getStyles()
  const isDisabled = !onPress

  return (
    <TouchableOpacity
      accessibilityRole={'button'}
      {...accessibilityRelated}
      style={[styles.container, style]}
      onPress={onPress}
      disabled={isDisabled}>
      {icon && <Icon name={icon} size={24} color="#FF9900" />}
    </TouchableOpacity>
  )
}

export default IconButton
