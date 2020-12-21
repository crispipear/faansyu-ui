import { deepMerge } from './deepMerge'

describe('utils/deepMerge', () => {
  it('correctly merges two objects', () => {
    const a = {
      borderRadius: '24px',
      fontSize: '16px',
      colors: {
        primary: 'base',
        secondary: 'base',
        success: 'base',
        info: 'base'
      }
    }
    const b = {
      borderRadius: '8px',
      colors: {
        primary: 'primaryColor',
        info: 'infoColor'
      }
    }
    const mergedObject = deepMerge(a, b)
    expect(mergedObject).toEqual({
      borderRadius: '8px',
      fontSize: '16px',
      colors: {
        primary: 'primaryColor',
        secondary: 'base',
        success: 'base',
        info: 'infoColor'
      }
    })
  })

  it('returns target if source is undefined', () => {
    const a = {
      borderRadius: '24px',
      fontSize: '16px',
      colors: {
        primary: 'base',
        secondary: 'base'
      }
    }
    const mergedObject = deepMerge(a, undefined)
    expect(mergedObject).toEqual({
      borderRadius: '24px',
      fontSize: '16px',
      colors: {
        primary: 'base',
        secondary: 'base'
      }
    })
  })
})
