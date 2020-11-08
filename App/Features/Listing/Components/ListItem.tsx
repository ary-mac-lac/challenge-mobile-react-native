import React from 'react'
import { Text, Pressable, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Thumbnail } from '../../../Components'

import getStyles from './ListItem.style'

export interface Props {
  imgSource?: string
  title?: string
  description?: string
  onPress?: () => void
  isFavorite: boolean
}

const ListItem: React.FC<Props> = ({ onPress, imgSource, isFavorite, title = '', description = '' }) => {
  const styles = getStyles()
  const hasDescription = description !== ''

  return (
    <Pressable style={styles.container} onPress={onPress} disabled={!onPress} testID={`list-item-${title}`}>
      <Thumbnail imgSource={imgSource} />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.title} testID={'list-item-title'}>
            {title}
          </Text>
          {isFavorite && <Icon name={'star'} size={24} color="#FF9900" style={styles.icon} />}
        </View>
        <Text
          testID={'list-item-description'}
          style={hasDescription ? styles.description : styles.unavailable}
          numberOfLines={4}
          ellipsizeMode={'tail'}>
          {hasDescription ? description : 'Description unavailable.'}
        </Text>
      </View>
    </Pressable>
  )
}

export default React.memo(ListItem)
