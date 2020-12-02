import { deepMerge } from './deepMerge'
import { FsTheme } from '../../fs.types'
const a = {
  borderRadius: '24px',
  colors: {
    primary: 'test',
    secondary: 'test'
  }
}
const b = {
  borderRadius: '16px',
  colors: {
    primary: {
      main: 'testMain',
      dark: 'testDark'
    }
  }
}

describe('utils/deepMerge', () => {
  it('correctly merges two objects', () => {
    const mergedObject = deepMerge<Partial<FsTheme>>(a, b)
    expect(mergedObject).toEqual({
      fontSizes: '16px',
      colors: {
        primary: { main: 'testMain', dark: 'testDark' },
        secondary: 'test'
      }
    })
  })
})
