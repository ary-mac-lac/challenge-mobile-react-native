import React from 'react'
import { View, ActivityIndicator } from 'react-native'

interface Props {
  isLoading: boolean
}

const FetchingMore: React.FC<Props> = ({ isLoading }) => (
  <View>
    <ActivityIndicator animating={isLoading} testID={'initial-loading-indicator'} />
  </View>
)

export default FetchingMore
