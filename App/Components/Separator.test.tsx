import React from 'react'
import { ReactTestInstance } from 'react-test-renderer'
import { render } from '@testing-library/react-native'
import { addOpacity } from '../Utils'

import Separator, { Props } from './Separator'
import { DEFAULT_COLOR, DEFAULT_OPACITY } from './Separator.style'

test('Renders without error', () => {
  const separator = new SeparatorPage({})
  expect(separator.self).toBeTruthy()
})

test('Has a default color', () => {
  const style = { backgroundColor: addOpacity(DEFAULT_COLOR, DEFAULT_OPACITY) }
  const separator = new SeparatorPage({})
  expect(separator.self).toHaveStyle(style)
})

test('Default color can be overwritten using the "color" prop', () => {
  const color = '#000000'
  const style = { backgroundColor: color }
  const separator = new SeparatorPage({ color })
  expect(separator.self).toHaveStyle(style)
})

class SeparatorPage {
  self: ReactTestInstance

  constructor(props: Partial<Props>) {
    const { getByTestId } = render(<Separator {...props} />)
    this.self = getByTestId('separator')
  }
}
