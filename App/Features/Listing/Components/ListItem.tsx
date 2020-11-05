import React from 'react'
import { Image, Text, Pressable } from 'react-native'

export interface Props {
  imgSource?: string
  title?: string
  description?: string
  onPress?: () => void
}

const ListItem: React.FC<Props> = ({ onPress, imgSource, title = '', description = '' }) => {
  return (
    <Pressable onPress={onPress} disabled={!onPress} testID={'list-item'}>
      <>
        <Image testID={'list-item-image'} source={{ uri: imgSource }} />
        <Text testID={'list-item-title'}>{title}</Text>
        <Text testID={'list-item-description'}>{description}</Text>
      </>
    </Pressable>
  )
}

export default ListItem
