import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RouteProp } from '@react-navigation/native'

import { makeURIString } from '../Utils'
import { ModalNavigatorParams } from '../../../Navigation'
import UserFeature from '../../User'
import { Character, List, Summary } from '../../../Entities'
import { Attribution } from '../Components'
import { Separator, Button, Thumbnail } from '../../../Components'

import getStyles from './DetailsScreen.style'

interface Props {
  route: RouteProp<ModalNavigatorParams, 'DetailsScreen'>
}

interface HeaderProps {
  character: Character
  isFavorite: boolean
  onPressFavoriteButton: () => void
}

type SectionProps = {
  header: string
  data: List<Summary> | undefined
}

interface ItemProps {
  children: React.ReactNode
}

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch()

  const { character, attribution } = route.params
  const { comics, events, series, stories } = character

  const favorites = useSelector(UserFeature.selectors.getFavorites)
  const isFavorite = !!favorites[character.id || -1]

  const addFavorite = () => character.id && dispatch(UserFeature.actions.entity.add(character.id))
  const removeFavorite = () => character.id && dispatch(UserFeature.actions.entity.remove(character.id))

  const styles = getStyles()
  return (
    <View style={styles.background} accessibilityViewIsModal={true}>
      <SafeAreaView style={styles.modal}>
        <Header
          character={character}
          isFavorite={isFavorite}
          onPressFavoriteButton={isFavorite ? removeFavorite : addFavorite}
        />
        <ScrollView bounces={false} contentContainerStyle={styles.content}>
          {!!character.description && <Text style={styles.description}>{character.description}</Text>}
          <Section header={'Comics'} data={comics} />
          <Section header={'Events'} data={events} />
          <Section header={'Series'} data={series} />
          <Section header={'Stories'} data={stories} />
        </ScrollView>
        <Attribution text={attribution} />
      </SafeAreaView>
    </View>
  )
}

const Section: React.FC<SectionProps> = ({ data, header }) => {
  const styles = getStyles()
  return (
    <>
      {data?.returned !== 0 && (
        <>
          <Text style={styles.sectionHeader}>{header}</Text>
          {data?.items?.map((item, index) => (
            <Item key={item.name || index}>{item.name}</Item>
          ))}
        </>
      )}
    </>
  )
}

const Item: React.FC<ItemProps> = ({ children }) => {
  const styles = getStyles()
  return (
    <View style={styles.itemContainer} accessible={true} accessibilityRole={'text'}>
      <View style={styles.bullet} />
      <Text style={styles.item}>{children}</Text>
    </View>
  )
}

const Header: React.FC<HeaderProps> = ({ character, isFavorite, onPressFavoriteButton }) => {
  const styles = getStyles()

  return (
    <>
      <View style={styles.headerContainer}>
        <>
          <Thumbnail imgSource={makeURIString(character.thumbnail)} size={44} />
          <Text style={styles.header} ellipsizeMode={'tail'} numberOfLines={1}>
            {character.name}
          </Text>
        </>
        {/* 
          Even though it looks like a button, this component represents a sort of boolean value: favorite or not favorite.
          This makes it functionally much more like a checkbox than a button, which is why accessibilityRole = checkbox 
        */}
        <Button.Icon
          accessibilityHint={"Click this button to toggle this character's favorite status"}
          accessibilityLabel={'Favorite this character'}
          accessibilityRole={'checkbox'}
          accessibilityState={{
            checked: isFavorite,
          }}
          icon={isFavorite ? 'star' : 'star-outline'}
          onPress={onPressFavoriteButton}
        />
      </View>
      <Separator style={styles.headerSeparator} />
    </>
  )
}

export default DetailsScreen
