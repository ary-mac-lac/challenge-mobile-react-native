import reduceToData from './reduceToData'
import { Character } from '../../../Entities'

test('Empty batch', () => {
  expect(reduceToData(undefined)).toStrictEqual([])
  expect(reduceToData([undefined])).toStrictEqual([])
  expect(reduceToData([undefined, undefined])).toStrictEqual([])
})

test('First batch', () => {
  const firstBatch = [character(1), character(2)]
  const apiResponse = wrap([firstBatch])
  const expectedResult = [...firstBatch]
  expect(reduceToData(apiResponse)).toStrictEqual(expectedResult)
})

test('Second batch', () => {
  const firstBatch = [character(1), character(2)]
  const secondBatch = [character(3), character(4)]
  const apiResponse = wrap([firstBatch, secondBatch])
  const expectedResult = [...firstBatch, ...secondBatch]
  expect(reduceToData(apiResponse)).toStrictEqual(expectedResult)
})

test('Third batch', () => {
  const firstBatch = [character(1), character(2)]
  const secondBatch = [character(3), character(4)]
  const thirdBatch = [character(5), character(6)]
  const apiResponse = wrap([firstBatch, secondBatch, thirdBatch])
  const expectedResult = [...firstBatch, ...secondBatch, ...thirdBatch]
  expect(reduceToData(apiResponse)).toStrictEqual(expectedResult)
})

const wrap = (characterArrays: (Character[] | undefined)[]) => {
  return characterArrays.map((characterArray) => ({
    data: {
      results: characterArray,
    },
  }))
}

const character = (id: number) => ({
  id,
  name: '3-D Man',
  description: '',
  modified: ('2014-04-29T14:18:17-0400' as unknown) as Date,
  thumbnail: {},
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
  comics: {},
  series: {},
  stories: {},
  events: {},
  urls: [],
})
