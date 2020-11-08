import React from 'react'
import { TextInput, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import getStyles from './SearchField.style'

interface Props {
  onChangeValueDelay?: number
  onChangeValue: (text: string) => void
  placeholder?: string
  noDelay?: boolean
  style: StyleProp<ViewStyle>
}

// TODO: extract to utility types file
type Timeout = ReturnType<typeof setTimeout>

const SearchField: React.FC<Props> = ({
  onChangeValueDelay = 2000,
  onChangeValue,
  placeholder,
  noDelay = false,
  style,
}) => {
  const styles = getStyles()
  const timeout = React.useRef<Timeout>()
  const [internalValue, setInternalValue] = React.useState('')

  // By default, this component triggers the search callback after a (default) 2-second timeout for efficiency reasons
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
      <TouchableOpacity style={styles.iconContainer} onPress={manualSearch}>
        <Icon name="md-search-outline" size={24} style={styles.icon} />
      </TouchableOpacity>
      <TextInput style={styles.input} value={internalValue} onChangeText={updateValue} placeholder={placeholder} />
    </View>
  )
}

export default SearchField
