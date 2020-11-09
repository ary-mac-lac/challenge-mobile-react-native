/*
 * This container holds only CONFIGURATION information.
 * PROVIDERS should be placed in ProviderContainer.tsx
 * so that they're available for use/configuration here.
 */

import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import whyDidYouRender from '@welldone-software/why-did-you-render'

import { RootStack, TestingStack } from '../Navigation'
import { DebugConfig } from '../Config'
import StorybookUI from '../../storybook'

if (__DEV__) {
  whyDidYouRender(React, {
    trackAllPureComponents: false,
    onlyLogs: true,
  })
}

export const ConfigContainer = (): JSX.Element => {
  return (
    <>
      <StatusBar backgroundColor={'#000'} barStyle="dark-content" translucent />
      <View style={styles.container}>
        {DebugConfig.useTestingScreen && <TestingStack />}
        {DebugConfig.useStorybook && <StorybookUI />}
        {!DebugConfig.useStorybook && !DebugConfig.useTestingScreen && <RootStack />}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
