import React from 'react'
import { useInfiniteQuery } from 'react-query'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
} from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ReactQueryWrapper, CharacterDataWrapper, Character } from '../../../Entities'
import { RootNavigatorParams } from '../../../Navigation'
import { api } from '../../../Services'
import ListItem from '../Components/ListItem'

import getStyle from './ListingScreen.style'

interface Props {
  navigation: StackNavigationProp<RootNavigatorParams, 'ListingScreen'>
  route: RouteProp<RootNavigatorParams, 'ListingScreen'>
}

const ListingScreen: React.FC<Props> = () => {
  const styles = getStyle()

  const getCharacters = (_: string, cursor = 0) => api.getCharacters({ cursor })

  const { data: queryWrapper, isFetching } = useInfiniteQuery('getCharacters', getCharacters, {
    getFetchMore: ({ data: marvelWrapper }) => {
      const offset = marvelWrapper?.data?.offset ?? 0
      const limit = marvelWrapper?.data?.limit ?? 0
      const total = marvelWrapper?.data?.total ?? -Infinity
      const cursor = offset + limit

      // No more items available
      if (cursor > total) {
        return false
      }

      // Fetch next batch of items starting at cursor
      return cursor
    },
  })

  // TODO: Extract and rename to reduceToData
  const flatten = (reactQueryWrapper: ReactQueryWrapper<CharacterDataWrapper>) => {
    if (!reactQueryWrapper) {
      return []
    }

    return reactQueryWrapper.reduce((accum, apiSauceWrapper) => {
      const marvelWrapper = apiSauceWrapper?.data
      const batchWrapper = marvelWrapper?.data
      const results = batchWrapper?.results ?? []

      // Fix this absurd wrapper within wrapper situation
      return [...accum, ...results]
    }, [] as Character[])
  }

  const renderItem: ListRenderItem<Character> = ({ item }) => {
    const { thumbnail } = item
    let imgSource

    if (thumbnail?.extension && thumbnail.path) {
      imgSource = thumbnail.path + '.' + thumbnail.extension
    }

    return <ListItem key={item.id} title={item.name} description={item.description} imgSource={imgSource} />
  }

  const data = flatten(queryWrapper)

  return (
    <SafeAreaView testID={'e2e-smoke-test'} style={styles.container}>
      {!isFetching && <FlatList renderItem={renderItem} keyExtractor={(item) => `${item.id}`} data={data} />}
      {isFetching && <ActivityIndicator size={'large'} />}
    </SafeAreaView>
  )
}

export default ListingScreen
