import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RouteProp } from '@react-navigation/native'

import { makeURIString } from '../Utils'
import { ModalNavigatorParams } from '../../../Navigation'
import UserFeature from '../../User'
import { List, Summary } from '../../../Entities'
import { Attribution } from '../Components'
import { Separator, Button, Thumbnail } from '../../../Components'

import getStyles from './DetailsScreen.style'

interface Props {
  route: RouteProp<ModalNavigatorParams, 'DetailsScreen'>
}

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch()

  const { character, attribution } = route.params
  const { comics, events, series, stories } = character

  const favorites = useSelector(UserFeature.selectors.getFavorites)
  const isFavorite = favorites[character.id || -1]

  const addFavorite = () => character.id && dispatch(UserFeature.actions.entity.add(character.id))
  const removeFavorite = () => character.id && dispatch(UserFeature.actions.entity.remove(character.id))

  const styles = getStyles()
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.modal}>
        <ScrollView bounces={false} contentContainerStyle={styles.content}>
          <View style={styles.headerContainer}>
            <>
              <Thumbnail imgSource={makeURIString(character.thumbnail)} size={44} />
              <ScreenHeader>{character.name}</ScreenHeader>
            </>
            <Button.Primary
              icon={isFavorite ? 'star' : 'star-outline'}
              onPress={isFavorite ? removeFavorite : addFavorite}
            />
          </View>
          <Separator style={styles.headerSeparator} />
          <Section header={'Comics'} data={comics} />
          <Section header={'Events'} data={events} />
          <Section header={'Series'} data={series} />
          <Section header={'Stories'} data={stories} renderSeparator={false} />
        </ScrollView>
        <Attribution text={attribution} />
      </SafeAreaView>
    </View>
  )
}

type UnitProps = {
  header: string
  data: List<Summary> | undefined
  renderSeparator?: boolean
}

const Section: React.FC<UnitProps> = ({ data, header, renderSeparator = true }) => {
  const styles = getStyles()
  return (
    <>
      {data?.returned !== 0 && (
        <>
          <SectionHeader>{header}</SectionHeader>
          {data?.items?.map((item, index) => (
            <Item key={item.name || index}>{item.name}</Item>
          ))}
          {renderSeparator && <Separator style={styles.separator} />}
        </>
      )}
    </>
  )
}

interface TextProps {
  children: React.ReactNode
}

const ScreenHeader: React.FC<TextProps> = ({ children }) => {
  const styles = getStyles()
  return (
    <Text style={styles.header} ellipsizeMode={'tail'} numberOfLines={1}>
      {children}
    </Text>
  )
}

const SectionHeader: React.FC<TextProps> = ({ children }) => {
  const styles = getStyles()
  return <Text style={styles.section}>{children}</Text>
}

const Item: React.FC<TextProps> = ({ children }) => {
  const styles = getStyles()
  return (
    <View style={styles.itemContainer}>
      <View style={styles.bullet} />
      <Text style={styles.item}>{children}</Text>
    </View>
  )
}

export default DetailsScreen
