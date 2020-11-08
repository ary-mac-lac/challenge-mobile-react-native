import React from 'react'
import { Text } from 'react-native'

import Separator from '../../../Components/Separator'
import getStyle from './Attribution.style'

interface Props {
  text: string
}

const Attribution: React.FC<Props> = ({ text }) => {
  const styles = getStyle()
  return (
    <>
      <Separator style={styles.separator} />
      <Text style={styles.text}>{text}</Text>
    </>
  )
}

export default Attribution
