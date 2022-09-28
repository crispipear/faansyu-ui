export type Primitive = string | number | symbol | boolean;

export type Shade = 'light' | 'main' | 'dark';

export type Size = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export type FontWeight = 'normal' | 'bold' | number;

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'disabled'
  | 'text'
  | 'border';

export type ColorItem = Record<Shade, string>;

export type ColorsHex = Partial<Record<Variant, string>>;

export type Colors = Record<Variant, ColorItem> & {
  hex?: ColorsHex;
}

export type Sizes = Record<Size, string>;

export interface FsTheme {
  fontSize: Sizes;
  borderRadius: string;
  spacing: Sizes;
  colors: Colors;
}

export type BaseComponentProps = React.PropsWithChildren<{
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  anchor?: boolean;
}>
