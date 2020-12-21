import { ColorItem } from '../../fs.types'
import { lighten, darken } from '../themeHelpers'

export const textColor = (
  colors: ColorItem,
  lightShade?: boolean,
  outlined?: boolean
): string => {
  if (lightShade) {
    return colors.dark
  }
  if (outlined) {
    return colors.main
  }
  return '#ffffff'
}

export const borderColor = (colors: ColorItem, outlined?: boolean): string => {
  if (outlined) {
    return colors.main
  }
  return 'transparent'
}

export const backgroundColor = (
  colors: ColorItem,
  lightShade?: boolean,
  outlined?: boolean
): string => {
  if (lightShade) {
    return colors.light
  }
  if (outlined) {
    return 'transparent'
  }
  return colors.main
}

export const activeColor = (
  colors: ColorItem,
  lightShade?: boolean,
  outlined?: boolean
): string => {
  if (lightShade) {
    return darken(colors.light, 0.12)
  }
  if (outlined) {
    return lighten(colors.light, 0.2)
  }
  return colors.dark
}

export const hoverColor = (
  colors: ColorItem,
  lightShade?: boolean,
  outlined?: boolean
): string => {
  if (lightShade) {
    return darken(colors.light, 0.04)
  }
  if (outlined) {
    return lighten(colors.light, 0.6)
  }
  return darken(colors.main, 0.2)
}
