import { FsTheme } from '../fs.types'

const defaultTheme: FsTheme = {
  borderRadius: '25px',
  fontSize: {
    xxl: '3.2rem',
    xl: '2.4rem',
    l: '2rem',
    m: '1.2rem',
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
      light: 'rgb(251,251,251)',
      main: '#E4E4E8',
      dark: 'rgb(137,137,139)'
    },
    disabled: {
      light: 'rgb(241,241,241)',
      main: '#AAAAAA',
      dark: 'rgb(102,102,102)'
    },
    info: {
      light: 'rgb(228,240,242)',
      main: '#59A0AD',
      dark: 'rgb(53,96,104)'
    },
    primary: {
      light: 'rgb(229,231,243)',
      main: '#5F6AB7',
      dark: 'rgb(57,64,110)'
    },
    secondary: {
      light: 'rgb(236,230,242)',
      main: '#8865AC',
      dark: 'rgb(82,61,103)'
    },
    success: {
      light: 'rgb(232,240,234)',
      main: '#6EA07D',
      dark: 'rgb(66,96,75)'
    },
    text: { light: 'rgb(223,223,224)', main: '#39373E', dark: 'rgb(34,33,37)' },
    warning: {
      light: 'rgb(246,231,236)',
      main: '#C46C87',
      dark: 'rgb(118,65,81)'
    }
  }
}

export default defaultTheme
