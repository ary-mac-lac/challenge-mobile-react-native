import React from 'react'
import { View, ActivityIndicator } from 'react-native'

interface Props {
  isLoading: boolean
}

const FetchingMore: React.FC<Props> = ({ isLoading }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator animating={isLoading} testID={'initial-loading-indicator'} color={'#999999'} />
  </View>
)

export default FetchingMore
