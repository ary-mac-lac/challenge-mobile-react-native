import { GlobalState } from '../../../Entities'
import { FavoritesList } from '../Redux/Favorites'

const getFavorites = (state: GlobalState): FavoritesList => state.entity.user.favorites

interface Selectors {
  getFavorites: typeof getFavorites
}

const selectors: Selectors = {
  getFavorites,
}

export default selectors
