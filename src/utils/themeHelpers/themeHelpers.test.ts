import { lighten } from './themeHelpers'

describe('Themes', () => {
  describe('color shade helper functions', () => {
    it('throws error if HEX value is invalid', () => {
      expect(() => lighten('#ABGKLM')).toThrow(
        'source color "#ABGKLM" must be HEX or RGB'
      )
    })
  })
})
