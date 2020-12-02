import { lighten } from './helpers'

describe('Themes', () => {
  describe('color shade helper functions', () => {
    it('throws error if HEX value is invalid', () => {
      expect(lighten('#ABGKLM')).toThrowError()
    })
  })
})
