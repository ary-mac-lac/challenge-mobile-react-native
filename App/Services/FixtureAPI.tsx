import { API } from './MarvelAPI'
import { buildResponse, timeout } from '../Utils'

import ListingFeatureFixtures from '../Features/Listing/Fixtures'

const create = (): API => ({
  getCharacters: async () => {
    await timeout(1000)
    return buildResponse({
      ok: true,
      data: ListingFeatureFixtures.success,
    })
  },
})

export default {
  create,
}
