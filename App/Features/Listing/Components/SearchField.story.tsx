import React from 'react'
import { StyleSheet, View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import SearchField from './SearchField'

storiesOf('Search Field', module)
  // @ts-ignore
  .addDecorator((storyFn) => <View style={styles.decorator}>{storyFn()}</View>)
  .add('Default', () => <SearchField onChangeValue={() => {}} />)

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
