import { ColorsHex } from '../fs.types'

const defaultYam = {
  primary: '#5F6AB7',
  secondary: '#8865AC',
  success: '#6EA07D',
  info: '#59A0AD',
  warning: '#C46C87',
  disabled: '#AAAAAA',
  text: '#39373E',
  border: '#E4E4E8'
}

const classicYam = {
  primary: '#047C3B',
  secondary: '#70418E',
  success: '#6E69A8',
  info: '#D9AD36',
  warning: '#AD4E5A',
  disabled: '#AAAAAA',
  text: '#39373E',
  border: '#E4E4E8'
}

const starFairies = {
  primary: '#384d8c',
  secondary: '#DC658A',
  success: '#5A8788',
  info: '#9C6DB9',
  warning: '#87282C',
  disabled: '#727272',
  text: '#39373E',
  border: '#E4E4E8'
}

const brightNight = {
  primary: '#3036B7',
  secondary: '#6324DA',
  success: '#479B2C',
  info: '#9C6DB9',
  warning: '#C7BA1B',
  disabled: '#263054',
  text: '#39373E',
  border: '#E4E4E8'
}

const matchaCherry = {
  primary: '#506F2F',
  secondary: '#8A804B',
  success: '#D6B53E',
  info: '#31324A',
  warning: '#506F2F',
  disabled: '#B9B4A2',
  text: '#39373E',
  border: '#E4E4E8'
}

export const directory: {
  [name: string]: ColorsHex
} = {
  defaultYam,
  classicYam,
  starFairies,
  brightNight,
  matchaCherry
}

export type ThemeNames =
  | 'defaultYam'
  | 'classicYam'
  | 'starFairies'
  | 'brightNight'
  | 'matchaCherry'
