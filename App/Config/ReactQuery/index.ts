import { QueryCache } from 'react-query'

const queryCache = new QueryCache()

export const getQueryCache = (): QueryCache => queryCache

export default {
  getQueryCache,
}
