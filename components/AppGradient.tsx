import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Content from './Content'

const AppGradient = ({children, colors, styles}: {children: any, colors:string[], styles: string}) => {
  return (
    <LinearGradient colors={colors} className={`${styles}`}>
            <Content>{children}</Content>
    </LinearGradient>
  )
}

export default AppGradient