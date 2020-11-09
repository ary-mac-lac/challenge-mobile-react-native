import { ReactQueryWrapper, CharacterDataWrapper } from '../../../Entities'

export default (wrapper: ReactQueryWrapper<CharacterDataWrapper>): string => {
  if (!wrapper) {
    return ''
  }

  const firstBatchReturned = wrapper[0]
  return firstBatchReturned?.attributionText ?? ''
}
