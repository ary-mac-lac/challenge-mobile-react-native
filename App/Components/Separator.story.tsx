import React from 'react'
import { StyleSheet, View } from 'react-native'

import { storiesOf } from '@storybook/react-native'

import Separator from './Separator'

storiesOf('Separator', module)
  // @ts-ignore
  .addDecorator((storyFn) => <View style={styles.decorator}>{storyFn()}</View>)
  .add('Default', () => <Separator style={{ height: 3 }} />)
  .add('Custom style', () => <Separator style={{ height: 10 }} />)

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
