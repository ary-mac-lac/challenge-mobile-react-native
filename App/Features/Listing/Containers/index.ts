import ListingScreen from './ListingScreen'
import DetailsScreen from './DetailsScreen'

// In order to make a feature as encapsulated as possible, the idea is to prevent the need to import directly from the screen file
// So two screen objects are exported instead. One will be passed to modal navigator, the other to main navigator
// https://reactnavigation.org/docs/nesting-navigators/#best-practices-when-nesting

export default {
  modals: {
    details: DetailsScreen,
  },
  full: {
    listing: ListingScreen,
  },
}
