import { CharacterDataWrapper, Character } from '../../../Entities'

//TODO: Add comment explaining the necessity of this function

export default (reactQueryWrapper: (CharacterDataWrapper | undefined)[] | undefined): Character[] => {
  if (!reactQueryWrapper) {
    return []
  }

  return reactQueryWrapper.reduce((accum, marvelWrapper) => {
    const results = marvelWrapper?.data?.results ?? []
    return [...accum, ...results]
  }, [] as Character[])
}
