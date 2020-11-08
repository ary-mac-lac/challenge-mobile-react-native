import { Animated } from 'react-native'
import { BREAKPOINT_1, BREAKPOINT_2, BREAKPOINT_3, BREAKPOINT_4 } from '../../Constants/Animation'

export default (progress: Animated.AnimatedInterpolation, height: number): Animated.AnimatedInterpolation =>
  progress.interpolate({
    inputRange: [BREAKPOINT_1, BREAKPOINT_2, BREAKPOINT_3, BREAKPOINT_4],
    // Output ranges are negative relative to height because this animation moves from bottom to top, not top to bottom
    outputRange: [
      height - height * BREAKPOINT_1,
      height - height * BREAKPOINT_2,
      height - height * BREAKPOINT_3,
      height - height * BREAKPOINT_4,
    ],
    extrapolate: 'clamp',
  })
