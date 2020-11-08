import { DebugConfig } from '../Config'
import FixtureAPI from './FixtureAPI'
import MarvelAPI from './MarvelAPI'

const api = DebugConfig.useFixtures ? FixtureAPI.create() : MarvelAPI.create()

export default {
  api,
}
