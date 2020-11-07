import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import API from '../Services/MarvelAPI'

const api = API.create()

const TestingScreen = (): JSX.Element => {
  // const cursor = React.useRef<number>(0)

  const getCharacters = (_: string, cursor = 0) =>
    api.getCharacters({ cursor }).then((response) => {
      return response.ok ? response.data : {}
    })

  const { fetchMore } = useInfiniteQuery('getCharacters', getCharacters, {
    getFetchMore: (response) => {
      const offset = response?.data?.offset ?? 0
      const limit = response?.data?.limit ?? 0
      const total = response?.data?.total ?? -Infinity
      const cursor = offset + limit

      // No more items available
      if (cursor > total) {
        return false
      }

      // Fetch next batch of items starting at cursor
      return cursor
    },
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => fetchMore()}>
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
