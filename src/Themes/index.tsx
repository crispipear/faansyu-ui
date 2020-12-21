import React from 'react'
import { ThemeProvider } from 'styled-components'
import { FsTheme, Colors, ColorItem } from '../fs.types'
import { lighten, darken } from '../utils/themeHelpers/themeHelpers'
import { deepMerge } from '../utils/deepMerge'
import DEFAULT_THEME from './defaultTheme'
import { directory, ThemeNames } from './themesDirectory'

const createShades = (val: string): ColorItem => ({
  light: lighten(val),
  main: val,
  dark: darken(val)
})

const createColorItem = (
  base: ColorItem,
  color?: Partial<ColorItem>
): ColorItem => {
  const output = {
    light: color?.light || (color?.main && lighten(color?.main)) || base.light,
    main: color?.main || base.main,
    dark: color?.dark || (color?.main && lighten(color?.main)) || base.dark
  }
  return output
}

const createThemePalette = (colors: Partial<Colors>, base: Colors): Colors => {
  if (colors.hex) {
    Object.entries(colors.hex).forEach(([state, value]) => {
      colors[state] = createShades(value || base[state].main)
    })
  }
  return {
    primary: createColorItem(base.primary, colors.primary),
    secondary: createColorItem(base.secondary, colors.secondary),
    success: createColorItem(base.success, colors.success),
    info: createColorItem(base.info, colors.info),
    warning: createColorItem(base.warning, colors.warning),
    disabled: createColorItem(base.disabled, colors.disabled),
    text: createColorItem(base.text, colors.text),
    border: createColorItem(base.border, colors.border)
  }
}

interface ThemeProviderWrapperProps {
  theme?: Partial<FsTheme>
  themeName?: ThemeNames
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ThemeProviderWrapper({
  children,
  theme,
  themeName
}: React.PropsWithChildren<ThemeProviderWrapperProps>) {
  const processedTheme = React.useMemo<FsTheme>(() => {
    let baseTheme = DEFAULT_THEME
    if (themeName && directory[themeName]) {
      baseTheme.colors = createThemePalette(
        { hex: directory[themeName] },
        baseTheme.colors
      )
    }
    if (theme) {
      baseTheme = deepMerge(baseTheme, theme)
      if (theme.colors) {
        baseTheme.colors = createThemePalette(theme.colors, baseTheme.colors)
      }
    }
    return baseTheme
  }, [theme])

  return <ThemeProvider theme={processedTheme}>{children}</ThemeProvider>
}

export default ThemeProviderWrapper
