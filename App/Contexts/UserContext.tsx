import React from 'react'
import type { User } from '../Entities'

export const UserContext = React.createContext<User>({
  username: null,
  token: null,
})
