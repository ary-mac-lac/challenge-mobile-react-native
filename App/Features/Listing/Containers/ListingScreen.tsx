import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaView, View, ActivityIndicator, FlatList, ListRenderItem, Text } from 'react-native'

import reduceToData from '../Utils/reduceToData'
import { Character } from '../../../Entities'
import { api } from '../../../Services'
import ListItem from '../Components/ListItem'
import Separator from '../../../Components/Separator'
import { MainNavigatorParams } from '../../../Navigation'

import getStyle from './ListingScreen.style'

interface Props {
  navigation: StackNavigationProp<MainNavigatorParams, 'ListingScreen'>
}

const ListingScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getStyle()

  const getCharacters = (_: string, cursor = 0) =>
    api.getCharacters({ cursor }).then((response) => {
      return response.ok ? response.data : {}
    })

  const {
    data: queryWrapper,
    canFetchMore,
    refetch,
    fetchMore,
    isFetching,
    isLoading,
    isFetchingMore,
  } = useInfiniteQuery('getCharacters', getCharacters, {
    getFetchMore: (response) => {
      const offset = response?.data?.offset ?? 0
      const limit = response?.data?.limit ?? 0
      const total = response?.data?.total ?? -Infinity
      const cursor = offset + limit
      return cursor > total ? false : cursor
    },
  })

  const renderItem: ListRenderItem<Character> = ({ item }) => {
    const { thumbnail } = item
    let imgSource

    if (thumbnail?.extension && thumbnail.path) {
      imgSource = thumbnail.path + '.' + thumbnail.extension
    }

    return (
      <ListItem
        key={item.id}
        title={item.name}
        onPress={() => {
          // Events not handled by the current navigator bubble up to parent navigators
          // However, navigate() only typechecks for screens in current navigator
          // @ts-ignore
          navigation.navigate('ModalStack', { screen: 'DetailsScren' })
        }}
        description={item.description}
        imgSource={imgSource}
      />
    )
  }

  // Flatten useInfiniteQuery's array of marvel wrapper arrays into a single data array
  const data = reduceToData(queryWrapper)

  return (
    <SafeAreaView testID={'e2e-smoke-test'} style={styles.container}>
      {!isLoading && (
        <FlatList
          refreshing={isFetching && !isLoading}
          onRefresh={() => refetch()}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            if (canFetchMore) {
              fetchMore()
            }
          }}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          data={data}
          ListFooterComponent={<FetchingMore isLoading={!!isFetchingMore} />}
          ItemSeparatorComponent={Separator}
        />
      )}
      {isLoading && <ActivityIndicator size={'large'} />}
      <Attibution text={queryWrapper?.[0]?.attributionText ?? ''} />
    </SafeAreaView>
  )
}

// TODO: Extract to its own file
const Attibution = ({ text }: { text: string }) => {
  const styles = getStyle()
  return (
    <>
      <Separator style={styles.attributionSeparator} />
      <Text style={styles.attribution}>{text}</Text>
    </>
  )
}

// TODO: Might not be necessary
const FetchingMore = ({ isLoading }: { isLoading: boolean }) => (
  <View>
    <ActivityIndicator animating={isLoading} />
  </View>
)

ListingScreen.whyDidYouRender = false

export default ListingScreen
