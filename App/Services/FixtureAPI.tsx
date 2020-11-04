import { API } from './API'
import { buildResponse, timeout } from '../Utils'

const fixtureAPI: API = {
  getCharacters: async () => {
    await timeout(1000)
    return buildResponse({
      ok: true,
      data: null,
    })
  },
}

export default fixtureAPI
