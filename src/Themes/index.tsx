import React from 'react'
import { ThemeProvider } from 'styled-components'
import { FsTheme, Colors, ColorShades } from '../fs.types'
import { lighten, darken } from './helpers'
import { deepMerge } from '../utils/deepMerge'
import DEFAULT_THEME from './defaultTheme'

const createThemePalette = (colors: Colors): Colors => {
  const palette = deepMerge<Partial<Colors>>(DEFAULT_THEME.colors, colors)
  Object.entries(colors).forEach(
    ([state, value]: [string, string | ColorShades]) => {
      if (typeof value === 'string') {
        palette[state] = {
          light: lighten(value),
          main: value,
          dark: darken(value)
        }
      } else if (value.main) {
        if (!value.light) value.light = lighten(value.main)
        if (!value.dark) value.dark = darken(value.main)
      }
    }
  )
  return colors
}

interface ThemeProviderWrapperProps {
  children?: React.ReactNode
  theme?: Partial<FsTheme>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ThemeProviderWrapper({ children, theme }: ThemeProviderWrapperProps) {
  const processedTheme = React.useMemo<Partial<FsTheme>>(() => {
    const mergedTheme = theme ? deepMerge(DEFAULT_THEME, theme) : DEFAULT_THEME
    if (mergedTheme.colors) {
      mergedTheme.colors = createThemePalette(mergedTheme.colors)
    }
    return mergedTheme
  }, [theme])
  return <ThemeProvider theme={processedTheme}>{children}</ThemeProvider>
}

export default ThemeProviderWrapper
