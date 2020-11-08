import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { StackNavigationProp } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import { SafeAreaView, View, ActivityIndicator, FlatList, ListRenderItem } from 'react-native'

import { reduceToData, makeURIString } from '../Utils'
import { Character } from '../../../Entities'
import { ListItem, Attribution } from '../Components'
import { Separator } from '../../../Components'
import { MainNavigatorParams } from '../../../Navigation'
import Services from '../../../Services'
import UserFeature from '../../../Features/User'

import getStyle from './ListingScreen.style'

interface Props {
  navigation: StackNavigationProp<MainNavigatorParams, 'ListingScreen'>
}

const ListingScreen: React.FC<Props> = ({ navigation }) => {
  const favorites = useSelector(UserFeature.selectors.getFavorites)
  const styles = getStyle()

  const getCharacters = (_: string, cursor = 0) =>
    Services.api.getCharacters({ cursor }).then((response) => {
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

  const attribution = queryWrapper?.[0]?.attributionText ?? ''

  const renderItem: ListRenderItem<Character> = ({ item }) => {
    const { thumbnail } = item
    const imgSource = makeURIString(thumbnail)

    return (
      <ListItem
        key={item.id}
        title={item.name}
        isFavorite={!!favorites[item.id || -1]}
        onPress={() => {
          // Events not handled by the current navigator bubble up to parent navigators
          // However, navigate() only typechecks for screens in current navigator
          // @ts-ignore
          navigation.navigate('ModalStack', { screen: 'DetailsScreen', params: { attribution, character: item } })
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
          testID={'list'}
          extraData={favorites}
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
      {isLoading && <ActivityIndicator testID={'fetching-more-indicator'} size={'large'} />}
      <Attribution text={attribution} />
    </SafeAreaView>
  )
}

// TODO: Might not be necessary
const FetchingMore = ({ isLoading }: { isLoading: boolean }) => (
  <View>
    <ActivityIndicator animating={isLoading} testID={'initial-loading-indicator'} />
  </View>
)

ListingScreen.whyDidYouRender = false

export default ListingScreen
