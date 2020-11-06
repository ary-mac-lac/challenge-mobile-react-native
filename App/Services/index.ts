import { DebugConfig } from '../Config'
import FixtureAPI from './FixtureAPI'
import MarvelAPI from './MarvelAPI'

export const api = DebugConfig.useFixtures ? FixtureAPI.create() : MarvelAPI.create()
