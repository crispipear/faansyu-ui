export type ShadeTypes = 'light' | 'main' | 'dark'

export type ColorVariants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'disabled'

export interface ColorShades {
  light?: string
  main?: string
  dark?: string
}

export type ColorContent = string | ColorShades

export interface Colors {
  primary?: ColorContent
  secondary?: ColorContent
  success?: ColorContent
  info?: ColorContent
  warning?: ColorContent
  disabled?: ColorContent
  text?: ColorContent
}

interface Sizes {
  xxl?: string
  xl?: string
  l?: string
  m?: string
  s?: string
  xs?: string
  xxs?: string
}

export interface FsTheme {
  fontSize?: Sizes
  borderRadius?: string
  spacing?: Sizes
  colors?: Colors
}
