import apisauce from 'apisauce'

const create = (baseURL = 'https://github.com') => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000,
  })

  const example = (username: string, password: string) => api.post('/token', { username, password })

  return {
    example,
  }
}

export type API = ReturnType<typeof create>

export default {
  create,
}
