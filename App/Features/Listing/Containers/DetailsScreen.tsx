import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ModalNavigatorParams } from '../../../Navigation'

interface Props {
  navigation: StackNavigationProp<ModalNavigatorParams, 'DetailsScreen'>
  route: RouteProp<ModalNavigatorParams, 'DetailsScreen'>
}

const DetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  )
}

export default DetailsScreen
