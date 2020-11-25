import DefaultTheme from './Themes/defaultTheme'
type Theme = typeof DefaultTheme
export type ThemeObject = Theme

export type ColorVariants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'disabled'
