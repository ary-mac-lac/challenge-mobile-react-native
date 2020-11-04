import * as React from 'react'
import { NavigationContainerRef } from '@react-navigation/native'

// Used in App/Containers/ProviderContainer.tsx
export const NavigationRef = React.createRef<NavigationContainerRef>()

const navigate = (name: string, params?: Record<string, unknown>): void => {
  return NavigationRef?.current?.navigate(name, params)
}

export default {
  navigate,
}
