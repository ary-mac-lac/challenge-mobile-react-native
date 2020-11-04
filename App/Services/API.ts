import apisauce from 'apisauce'
import md5 from 'js-md5'

const PUBLIC_KEY = '1ac96d486f65837629d143bd3131e1a3'
const PRIVATE_KEY = 'd2e1a0546b856f119b3adc3427e12a1bf3b563fa'

const create = (baseURL = 'https://gateway.marvel.com') => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000,
  })

  api.addRequestTransform((request) => {
    const ts = Number(new Date())
    request.params = {
      ...request.params,
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: md5(ts + PRIVATE_KEY + PUBLIC_KEY),
    }
  })

  const getCharacters = () => api.get('/v1/public/characters')

  return {
    getCharacters,
  }
}

export type API = ReturnType<typeof create>

export default {
  create,
}
