import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ModalNavigatorParams } from '../../../Navigation'

import getStyles from './DetailsScreen.style'

interface Props {
  navigation: StackNavigationProp<ModalNavigatorParams, 'DetailsScreen'>
  route: RouteProp<ModalNavigatorParams, 'DetailsScreen'>
}

const DetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { character } = route.params
  const styles = getStyles()
  return (
    <View style={styles.background}>
      <View style={styles.modal}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default DetailsScreen
