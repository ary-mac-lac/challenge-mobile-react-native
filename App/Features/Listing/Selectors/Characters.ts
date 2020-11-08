import { Character } from '../../../Entities'
import { ReduxConfig } from '../../../Config'

interface Props {
  data: Character[]
  by: {
    name?: string
    isFavorite?: boolean
  }
}

const filter = ({ data, by }: Props): Character[] => {
  if (by.name) {
    data = data.filter((character) => character.name?.toUpperCase().includes(by.name?.toUpperCase() || ''))
  }

  if (by.isFavorite) {
    const state = ReduxConfig.store.getState()
    const favorites = state?.entity.user.favorites ?? {}

    // TODO: Turn -1 into a 'NOT FOUND' constant
    data = data.filter((character) => favorites[character.id || -1])
  }

  return data
}

export default { filter }
