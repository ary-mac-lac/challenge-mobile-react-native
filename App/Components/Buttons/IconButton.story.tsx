import React from 'react'
import { StyleSheet, View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import IconButton from './IconButton'

storiesOf('Primary Button', module)
  // @ts-ignore
  .addDecorator((storyFn) => <View style={styles.decorator}>{storyFn()}</View>)
  .add('Favoritar', () => <IconButton onPress={() => {}} icon={'star'} />)
  .add('Desfavoritar', () => <IconButton onPress={() => {}} icon={'star-outline'} />)

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
