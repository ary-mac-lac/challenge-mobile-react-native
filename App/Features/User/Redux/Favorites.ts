import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Lookup should be O(1) for quick `isFavorite` checks, which is why `favorites` state is an object, not an array
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
