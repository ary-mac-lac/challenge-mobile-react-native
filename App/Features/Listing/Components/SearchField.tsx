import React from 'react'
import { TextInput, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Timeout } from '../../../Entities'
import getStyles from './SearchField.style'

interface Props {
  onChangeValueDelay?: number
  onChangeValue: (text: string) => void
  placeholder?: string
  noDelay?: boolean
  style?: StyleProp<ViewStyle>
  buttonAccessibilityLabel?: string
  buttonAccessibilityHint?: string
}

const SearchField: React.FC<Props> = ({
  buttonAccessibilityLabel,
  buttonAccessibilityHint,
  onChangeValueDelay = 2000,
  onChangeValue,
  placeholder,
  noDelay = false,
  style,
}) => {
  const styles = getStyles()
  const timeout = React.useRef<Timeout>()
  const [internalValue, setInternalValue] = React.useState('')

  // By default, this component triggers the search callback after a 2-second timeout for efficiency reasons
  // But this behavior can be overriden in favor of immediate searches using the `noDelay` prop
  const updateValue = (text: string) => {
    setInternalValue(text)

    if (noDelay) {
      onChangeValue(text)
      return
    }

    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    timeout.current = setTimeout(() => {
      onChangeValue(text)
    }, onChangeValueDelay)
  }

  // The search icon also allows the user to trigger an immediate search
  const manualSearch = () => onChangeValue(internalValue)

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        accessibilityHint={buttonAccessibilityHint}
        accessibilityLabel={buttonAccessibilityLabel}
        style={styles.iconContainer}
        onPress={manualSearch}>
        <Icon name="md-search-outline" size={24} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        accessibilityRole={'search'}
        accessibilityHint={'The search will be executed automatically as you type'}
        style={styles.input}
        value={internalValue}
        onChangeText={updateValue}
        placeholder={placeholder}
        placeholderTextColor={'#767676'}
      />
    </View>
  )
}

export default SearchField
