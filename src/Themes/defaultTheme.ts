import { FsTheme } from '../fs.types'

const defaultTheme: FsTheme = {
  borderRadius: '25px',
  fontSize: {
    xxl: '4rem',
    xl: '3.2rem',
    l: '2.4rem',
    m: '1.4rem',
    s: '0.96rem',
    xs: '0.84rem',
    xxs: '0.76rem'
  },
  spacing: {
    xxl: '4rem',
    xl: '3.2rem',
    l: '2.4rem',
    m: '1.6rem',
    s: '0.92rem',
    xs: '0.64rem',
    xxs: '0.4rem'
  },
  colors: {
    border: {
      light: 'rgb(250,250,250)',
      main: '#E4E4E8',
      dark: 'rgb(137,137,139)'
    },
    disabled: {
      light: 'rgb(238,238,238)',
      main: '#AAAAAA',
      dark: 'rgb(102,102,102)'
    },
    info: {
      light: 'rgb(224,235,238)',
      main: '#639BAC',
      dark: 'rgb(59,93,103)'
    },
    primary: {
      light: 'rgb(224,229,242)',
      main: '#667EBE',
      dark: 'rgb(61,76,114)'
    },
    secondary: {
      light: 'rgb(232,229,242)',
      main: '#8A7BBE',
      dark: 'rgb(83,74,114)'
    },
    success: {
      light: 'rgb(223,236,228)',
      main: '#61A079',
      dark: 'rgb(58,96,73)'
    },
    text: { light: 'rgb(215,215,216)', main: '#39373E', dark: 'rgb(34,33,37)' },
    warning: {
      light: 'rgb(243,225,225)',
      main: '#C36767',
      dark: 'rgb(117,62,62)'
    }
  }
}

export default defaultTheme
