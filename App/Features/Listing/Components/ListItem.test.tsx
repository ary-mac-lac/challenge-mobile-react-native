import React from 'react'

import type { ReactTestInstance } from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'

import ListItem, { Props } from './ListItem'

test('ListItem renders without error', () => {
  const listitem = new ListItemPage({})
  expect(listitem.self).toBeTruthy()
})

test('Should call onPress callback when clicked', () => {
  const onPress = jest.fn()
  const listitem = new ListItemPage({ onPress })
  fireEvent.press(listitem.self)
  expect(onPress).toHaveBeenCalledTimes(1)
})

describe('Image requirements', () => {
  test('Should render a thumbnail image when passed imgSource prop', () => {
    const imgSource =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMCb2RDe0jm3W2R1H_eYwV9g55K4Pwh_fNqw&usqp=CAU'
    const listitem = new ListItemPage({ imgSource })
    expect(listitem.image).toBeTruthy()
  })

  test('Should render a thumbnail image even when not passed imgSource prop', () => {
    const listitem = new ListItemPage({})
    expect(listitem.image).toBeTruthy()
  })
})

describe('Title requirements', () => {
  test('Should render received title', () => {
    const title = 'TDD Testing'
    const listitem = new ListItemPage({ title })
    expect(listitem.title).toHaveTextContent(title)
  })

  test('Should render empty string if not passed a title', () => {
    const listitem = new ListItemPage({ title: undefined })
    expect(listitem.title).toHaveTextContent('')
  })
})

describe('Description requirements', () => {
  test('Should render received description', () => {
    const description = 'TDD Testing'
    const listitem = new ListItemPage({ description })
    expect(listitem.description).toHaveTextContent(description)
  })

  test('Should render empty string if not passed a description', () => {
    const listitem = new ListItemPage({})
    expect(listitem.description).toHaveTextContent('')
  })
})

// TODO: Test favorite behavior

class ListItemPage {
  self: ReactTestInstance
  image: ReactTestInstance
  title: ReactTestInstance
  description: ReactTestInstance

  constructor({ title = 'Testing', ...other }: Partial<Props>) {
    const { getByTestId } = render(<ListItem {...other} title={title} isFavorite={true} />)

    this.self = getByTestId(`list-item-${title}`)
    this.image = getByTestId('thumbnail-image')
    this.title = getByTestId('list-item-title')
    this.description = getByTestId('list-item-description')
  }
}
