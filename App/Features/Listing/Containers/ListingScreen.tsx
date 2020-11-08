import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { StackNavigationProp } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import { SafeAreaView, View, ActivityIndicator, FlatList, ListRenderItem } from 'react-native'

import { reduceToData, makeURIString } from '../Utils'
import { Character } from '../../../Entities'
import { ListItem, Attribution, SearchField } from '../Components'
import { Separator, Button } from '../../../Components'
import { MainNavigatorParams } from '../../../Navigation'
import Services from '../../../Services'
import UserFeature from '../../../Features/User'
import Selectors from '../Selectors'

import getStyle from './ListingScreen.style'

interface Props {
  navigation: StackNavigationProp<MainNavigatorParams, 'ListingScreen'>
}

const ListingScreen: React.FC<Props> = ({ navigation }) => {
  const [nameFilter, setNameFilter] = React.useState('')
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

  const renderItem: ListRenderItem<Character> = ({ item }) => {
    const { thumbnail } = item
    const imgSource = makeURIString(thumbnail)

    return (
      <ListItem
        key={item.id}
        title={item.name}
        isFavorite={!!favorites[item.id || -1]}
        onPress={() => {
          // Events not handled by the current navigator bubble up to parent navigators. However, navigate() only typechecks for screens in current navigator
          // @ts-ignore
          navigation.navigate('ModalStack', { screen: 'DetailsScreen', params: { attribution, character: item } })
        }}
        description={item.description}
        imgSource={imgSource}
      />
    )
  }

  const areFiltersActive = !!nameFilter || !!favoritesFilter

  const onEndReached = () => canFetchMore && !areFiltersActive && fetchMore()

  const keyExtractor = (item: Character) => `${item.id}`

  // Cannot pass ´refetch´ directly because passing an argument to this function causes side-effects
  const onRefresh = () => refetch()

  const attribution = queryWrapper?.[0]?.attributionText ?? ''

  // Flatten useInfiniteQuery's array of marvel wrappers into a single data array
  const arrayData = reduceToData(queryWrapper)

  const filteredData = Selectors.characters.filter({
    data: arrayData,
    by: { isFavorite: favoritesFilter, name: nameFilter },
  })

  return (
    <SafeAreaView testID={'e2e-smoke-test'} style={styles.container}>
      {!isLoading && (
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
          ListHeaderComponent={
            // TODO: Extract to its own component
            <View style={styles.row}>
              <SearchField
                noDelay
                placeholder={'Filtre por nome'}
                onChangeValue={setNameFilter}
                style={styles.searchField}
              />
              <Button.Primary
                style={styles.favoriteFilter}
                icon={favoritesFilter ? 'star' : 'star-outline'}
                onPress={favoritesFilter ? () => setFavoritesFilter(undefined) : () => setFavoritesFilter(true)}
              />
            </View>
          }
          ListFooterComponent={<FetchingMore isLoading={!!isFetchingMore} />}
          ItemSeparatorComponent={Separator}
        />
      )}
      {isLoading && <ActivityIndicator testID={'fetching-more-indicator'} size={'large'} />}
      <Attribution text={attribution} />
    </SafeAreaView>
  )
}

// TODO: Extract to its own component
const FetchingMore = ({ isLoading }: { isLoading: boolean }) => (
  <View>
    <ActivityIndicator animating={isLoading} testID={'initial-loading-indicator'} />
  </View>
)

ListingScreen.whyDidYouRender = true

export default ListingScreen
