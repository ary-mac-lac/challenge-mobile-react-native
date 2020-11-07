import React from 'react'
import { Image, Text, Pressable, View } from 'react-native'
import getStyles from './ListItem.style'

export interface Props {
  imgSource?: string
  title?: string
  description?: string
  onPress?: () => void
}

const ListItem: React.FC<Props> = ({ onPress, imgSource, title = '', description = '' }) => {
  const styles = getStyles()
  const hasDescription = description !== ''

  return (
    <Pressable style={styles.container} onPress={onPress} disabled={!onPress} testID={'list-item'}>
      <View style={styles.imageContainer}>
        <Image testID={'list-item-image'} source={{ uri: imgSource }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} testID={'list-item-title'}>
          {title}
        </Text>
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
