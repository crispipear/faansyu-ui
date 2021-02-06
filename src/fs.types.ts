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

export type ColorItem = Record<ShadeTypes, string>

export type ColorsHex = Partial<Record<VariantTypes, string>>

export type Colors = Record<VariantTypes, ColorItem> & {
  hex?: ColorsHex
}

export type Sizes = Record<SizeTypes, string>

export interface FsTheme {
  fontSize: Sizes
  borderRadius: string
  spacing: Sizes
  colors: Colors
}

export type BaseComponentProps = React.PropsWithChildren<{
  className?: string
  style?: React.CSSProperties
}>
