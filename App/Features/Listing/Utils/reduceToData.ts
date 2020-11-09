import { CharacterDataWrapper, Character, ReactQueryWrapper } from '../../../Entities'

// Redux Query's useInfiniteQuery hook returns an array of data where each object
// is the result of a call to the same endpoint, at a different cursor position (ex. 0-20, 21-40).
// This function reduces the array of resource arrays (characters, comics, etc) into a single array

export default (infinteQueryResultsArray: ReactQueryWrapper<CharacterDataWrapper>): Character[] => {
  if (!infinteQueryResultsArray) {
    return []
  }

  return infinteQueryResultsArray.reduce((accum, marvelWrapper) => {
    const results = marvelWrapper?.data?.results ?? []
    return [...accum, ...results]
  }, [] as Character[])
}
