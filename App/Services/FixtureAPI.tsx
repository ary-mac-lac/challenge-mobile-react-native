import { API } from './MarvelAPI'
import { timeout } from '../Utils'

import ListingFeatureFixtures from '../Features/Listing/Fixtures'

const create = (): API => ({
  getCharacters: async () => {
    await timeout(1000)
    return ListingFeatureFixtures.success
  },
})

export default {
  create,
}
