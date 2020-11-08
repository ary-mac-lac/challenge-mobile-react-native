import React from 'react'
import { Image, View } from 'react-native'
import getStyles from './Thumbnail.style'

export interface Props {
  imgSource?: string
  size?: number
}

const Thumbnail: React.FC<Props> = ({ size, imgSource }) => {
  const styles = getStyles()
  return (
    <View style={styles.container}>
      <Image
        testID={'thumbnail-image'}
        source={{ uri: imgSource }}
        style={[styles.image, !!size && { height: size, borderRadius: size / 2 }]}
      />
    </View>
  )
}

export default Thumbnail
