import { Dimensions } from 'react-native'
const { height } = Dimensions.get('screen')

export const MODAL_HEIGHT = height * 0.8 // Picture this from bottom to top of screen
export const MDOAL_GESTURE_RESPONSE_DISTANCE = height * 0.35 // Picture this from top to bottom of screen

// Gesture response distance overlaps modal at the top so that users can touch the top of the modal to slide it down
