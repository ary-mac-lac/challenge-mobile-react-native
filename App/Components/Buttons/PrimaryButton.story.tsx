import React from 'react'
import { StyleSheet, View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import PrimaryButton from './PrimaryButton'

storiesOf('Primary Button', module)
  // @ts-ignore
  .addDecorator((storyFn) => <View style={styles.decorator}>{storyFn()}</View>)
  .add('Default', () => <PrimaryButton label={'Favoritar'} onPress={() => {}} />)
  .add('Favoritar', () => <PrimaryButton label={'Favoritar'} onPress={() => {}} icon={'star'} />)
  .add('Desfavoritar', () => <PrimaryButton label={'Desfavoritar'} onPress={() => {}} icon={'star-outline'} />)

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
