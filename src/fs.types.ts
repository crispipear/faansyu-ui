export type Primitive = string | number | symbol | boolean

export type ShadeTypes = 'light' | 'main' | 'dark'

export type SizeTypes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export type VariantTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'disabled'
  | 'text'
  | 'border'

export interface ColorItem {
  light: string
  main: string
  dark: string
}

export type ColorsHex = {
  [key in VariantTypes]?: string
}

export interface Colors {
  hex?: ColorsHex
  primary: ColorItem
  secondary: ColorItem
  success: ColorItem
  info: ColorItem
  warning: ColorItem
  disabled: ColorItem
  text: ColorItem
  border: ColorItem
}

interface Sizes {
  xxl: string
  xl: string
  l: string
  m: string
  s: string
  xs: string
  xxs: string
}

export interface FsTheme {
  fontSize: Sizes
  borderRadius: string
  spacing: Sizes
  colors: Colors
}

export type BaseComponentProps = React.PropsWithChildren<{
  style?: React.CSSProperties
}>
