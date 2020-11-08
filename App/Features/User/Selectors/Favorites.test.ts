// @ts-nocheck
import Selectors from './Favorites'

// The shape of the user slice
// In a bigger feature, there could be a second 'ui' key
const state = {
  entity: {
    user: {
      favorites: {},
    },
  },
}

describe('Entity selectors', () => {
  test('getFavorites returns empty object when user has no favorites', () => {
    const favorites = {}
    state.entity.user.favorites = favorites
    expect(Selectors.getFavorites(state)).toStrictEqual(favorites)
  })

  test('getFavorites returns populated when user has no favorites', () => {
    const favorites = {
      '12345': true,
      '12346': true,
    }
    state.entity.user.favorites = favorites
    expect(Selectors.getFavorites(state)).toStrictEqual(favorites)
  })
})
