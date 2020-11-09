import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaView, ActivityIndicator, FlatList, ListRenderItem } from 'react-native'

import { reduceToData, makeURIString, filterData, getAttributionText } from '../Utils'
import { Character } from '../../../Entities'
import { ListItem, Attribution, FetchingMore, FilterHeader } from '../Components'
import { Separator } from '../../../Components'
import { NOT_FOUND } from '../../../Constants/Misc'
import { MainNavigatorParams } from '../../../Navigation'
import Services from '../../../Services'
import UserFeature from '../../../Features/User'

import getStyle from './ListingScreen.style'

interface Props {
  navigation: StackNavigationProp<MainNavigatorParams, 'ListingScreen'>
}

const ListingScreen: React.FC<Props> = ({ navigation }) => {
  const [nameFilter, setNameFilter] = React.useState<string>('')
  const [favoritesFilter, setFavoritesFilter] = React.useState<boolean>()
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
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    getFetchMore: (response) => {
      const offset = response?.data?.offset ?? 0
      const limit = response?.data?.limit ?? 0
      const total = response?.data?.total ?? -Infinity
      const cursor = offset + limit
      return cursor > total ? false : cursor
    },
  })

  const renderItem: ListRenderItem<Character> = ({ item: character }) => {
    const { thumbnail } = character
    const imgSource = makeURIString(thumbnail)
    const isFavorite = !!favorites[character.id || NOT_FOUND]
    const onPress = () => {
      // @ts-ignore - Events not handled by current navigator bubble up to parents. However, navigate() only typechecks for screens in current navigator
      navigation.navigate('ModalStack', { screen: 'DetailsScreen', params: { attribution, character } })
    }

    return (
      <ListItem
        key={character.id}
        title={character.name}
        isFavorite={isFavorite}
        onPress={onPress}
        description={character.description}
        imgSource={imgSource}
      />
    )
  }

  const toggleFavoritesFilter = () => {
    if (favoritesFilter) {
      setFavoritesFilter(false)
    } else {
      setFavoritesFilter(true)
    }
  }

  const areFiltersActive = !!nameFilter || !!favoritesFilter

  const onEndReached = () => canFetchMore && !areFiltersActive && fetchMore()

  const keyExtractor = (item: Character) => `${item.id}`

  // Cannot pass ´refetch´ directly because passing an argument to this function causes side-effects
  const onRefresh = () => refetch()

  const attribution = getAttributionText(queryWrapper)

  // Flatten useInfiniteQuery's array of marvel wrappers into a single data array
  const arrayData = reduceToData(queryWrapper)
  const filteredData = filterData({
    data: arrayData,
    by: { isFavorite: favoritesFilter, name: nameFilter },
  })

  return (
    <SafeAreaView testID={'e2e-smoke-test'} style={styles.container}>
      {!isLoading && (
        <>
          {/* Header field placed outside FlatList's ListHeadComponent prop for two reasons:
              1. The header sticks this way
              2. The search field becomes acessible to screen readers
          */}
          <FilterHeader
            favoritesFilterActive={!!favoritesFilter}
            onChangeNameFilter={setNameFilter}
            onToggleFavoritesFilter={toggleFavoritesFilter}
          />
          <FlatList
            testID={'list'}
            extraData={favorites}
            refreshing={isFetching && !isLoading}
            onRefresh={onRefresh}
            onEndReachedThreshold={0.1}
            onEndReached={onEndReached}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            data={filteredData}
            ListFooterComponent={<FetchingMore isLoading={!!isFetchingMore} />}
            ItemSeparatorComponent={Separator}
          />
        </>
      )}
      {isLoading && <ActivityIndicator testID={'fetching-more-indicator'} size={'large'} />}
      <Attribution text={attribution} />
    </SafeAreaView>
  )
}

ListingScreen.whyDidYouRender = true

export default ListingScreen
