import { Animated } from 'react-native'
import { BREAKPOINT_1, BREAKPOINT_2, BREAKPOINT_3, BREAKPOINT_4 } from '../../Constants/Animation'

export default (progress: Animated.AnimatedInterpolation): Animated.AnimatedInterpolation =>
  progress.interpolate({
    inputRange: [BREAKPOINT_1, BREAKPOINT_2, BREAKPOINT_3, BREAKPOINT_4],
    outputRange: [0, 0, 0.7, 1],
  })
