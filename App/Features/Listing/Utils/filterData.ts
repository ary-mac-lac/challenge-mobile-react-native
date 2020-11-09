import { Character } from '../../../Entities'
import { ReduxConfig } from '../../../Config'
import { NOT_FOUND } from '../../../Constants/Misc'

interface Props {
  data: Character[]
  by: {
    name?: string
    isFavorite?: boolean
  }
}

export default ({ data, by }: Props): Character[] => {
  if (by.name) {
    data = data.filter((character) => character.name?.toUpperCase().includes(by.name?.toUpperCase() || ''))
  }

  if (by.isFavorite) {
    const state = ReduxConfig.store.getState()
    const favorites = state?.entity.user.favorites ?? {}
    data = data.filter((character) => favorites[character.id || NOT_FOUND])
  }

  return data
}
