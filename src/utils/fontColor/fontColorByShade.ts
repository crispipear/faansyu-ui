import { ColorShades, ShadeTypes } from '../../fs.types'
export const fontColorByShade = (
  colors: ColorShades,
  shade: ShadeTypes
): string => {
  if (shade === 'light') return colors.dark || '#000'
  else return '#fff'
}
