import React from 'react'
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import getStyles from './PrimaryButton.style'

interface Props {
  label?: string
  onPress: () => void
  icon?: 'star' | 'star-outline'
  style?: StyleProp<ViewStyle>
}

// TODO: Rename to IconButton, in case there's no use-case for the button with labels

const PrimaryButton: React.FC<Props> = ({ label, onPress, icon, style }) => {
  const styles = getStyles()

  return (
    <TouchableOpacity
      style={[styles.container, !!icon && !label && styles.onlyIconContainer, style]}
      onPress={onPress}
      disabled={!onPress}>
      {icon && <Icon name={icon} size={24} color="#FF9900" />}
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  )
}

export default PrimaryButton
