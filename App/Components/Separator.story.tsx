import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Separator from './Separator'

storiesOf('Separator', module)
  .add('Default', () => <Separator />)
  .add('Custom style', () => <Separator style={{ height: 10 }} />)
