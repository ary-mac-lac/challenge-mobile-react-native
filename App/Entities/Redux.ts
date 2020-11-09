import { EnhancedStore } from '@reduxjs/toolkit'
import { rootReducer } from '../Config/Redux'

export type GlobalState = ReturnType<typeof rootReducer>
export type GlobalStore = EnhancedStore<GlobalState, any>
