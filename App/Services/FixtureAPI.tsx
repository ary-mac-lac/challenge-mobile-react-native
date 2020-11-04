import { API } from './API'
import { buildResponse, timeout } from '../Utils'

import ExampleFeature from '../Features/Example'

const fixtureAPI: API = {
  example: async () => {
    await timeout(1000)
    return buildResponse({
      ok: true,
      data: ExampleFeature.fixtures.success,
    })
  },
}

export default fixtureAPI
