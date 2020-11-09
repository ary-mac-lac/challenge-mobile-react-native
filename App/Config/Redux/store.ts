/*
 * This creates a Redux Store object which can be accessed outside the scope of a component (through the various react-redux hooks)
 * Unfortunate but necessary, because local and server states are being managed by two different libraries (redux, react-query)
 * and they ocassionally need to interact in utility and data-tranform files.
 *
 * The store is set in the configureStore() stage of the redux state creation.
 */

import { GlobalStore, GlobalState } from '../../Entities'

let _store: GlobalStore | undefined

const Store = {
  get: (): GlobalStore | undefined => _store,
  getState: (): GlobalState | undefined => _store?.getState(),
  set: (store: GlobalStore): void => {
    _store = store
  },
}

Object.freeze(Store)

export default Store
