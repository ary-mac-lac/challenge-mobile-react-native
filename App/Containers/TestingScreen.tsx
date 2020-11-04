import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import API from '../Services/API'

const api = API.create()

const TestingScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          const response = await api.getCharacters()
          console.log(response)
        }}>
        <Text>Fazer chamada</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TestingScreen
