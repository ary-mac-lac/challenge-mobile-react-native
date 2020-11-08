import Favorites from './Favorites'

/*
 * Sometimes, for features with both an entity and a ui reducer,
 * this file is used to package actions and reducers into objects
 * to be exported more conveniently
 */

const actions = {
  entity: Favorites.actions,
}

const reducers = {
  entity: Favorites.reducer,
}

export { reducers, actions }
