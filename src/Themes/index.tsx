import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeObject } from '../yam.types'
import DEFAULT_THEME from './defaultTheme'

interface ThemeProviderWrapperProps {
  children?: React.ReactNode
  theme?: Partial<ThemeObject>
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ThemeProviderWrapper({
  children,
  theme = DEFAULT_THEME
}: ThemeProviderWrapperProps) {
  const processedTheme = React.useMemo<Partial<ThemeObject>>(() => {
    return theme
  }, [theme])
  return <ThemeProvider theme={processedTheme}>{children}</ThemeProvider>
}

export default ThemeProviderWrapper
