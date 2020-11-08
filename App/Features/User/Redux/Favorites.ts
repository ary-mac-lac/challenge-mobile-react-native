import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/*
 * Lookup should be O(1) for quick `isFavorite` checks, which is why `favorites` state is an object, not an array
 * In an ideal world, the `favorites` state would a Set (O(1) for both lookup and deletion)
 * However, Sets aren't serializable and thus don't work well with Redux
 * Mor information: https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions
 */

export interface FavoritesList {
  [id: string]: true | undefined
}

interface State {
  favorites: FavoritesList
}

const initialState: State = {
  favorites: {},
}

const favorites = createSlice({
  name: 'entity/user/favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.favorites = {
        ...state.favorites,
        [action.payload]: true,
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      // Undefined keys will be automatically removed when serialized
      state.favorites[action.payload] = undefined
    },
  },
})

export default {
  initialState,
  ...favorites,
}
