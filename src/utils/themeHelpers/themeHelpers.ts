function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}), ${parseInt(
        result[3],
        16
      )}`
    : null
}

const linearShade = (percentage: number, color: string) => {
  // original source: https://github.com/PimpTrizkit/PJs
  const i = parseInt
  const r = Math.round
  const [a, b, c, d] = color.split(',')
  const darken = percentage < 0
  const t = darken ? 0 : 255 * percentage
  const P = darken ? 1 + percentage : 1 - percentage
  return (
    'rgb' +
    (d ? 'a(' : '(') +
    r(i(a[3] === 'a' ? a.slice(5) : a.slice(4)) * P + t) +
    ',' +
    r(i(b) * P + t) +
    ',' +
    r(i(c) * P + t) +
    (d ? ',' + d : ')')
  )
}

const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i
const rgbRegex = /rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)/

const shadeColor = (color: string, percentage: number): string => {
  if (hexRegex.test(color)) {
    const convered = hexToRgb(color)
    if (!convered) {
      throw new Error('invalid HEX value')
    }
    return linearShade(percentage, convered)
  } else if (rgbRegex.test(color)) {
    return linearShade(percentage, color)
  } else {
    throw new Error(`source color "${color}" must be HEX or RGB`)
  }
}

export const lighten = (color: string, value = 0.8): string => {
  return shadeColor(color, value)
}

export const darken = (color: string, value = 0.4): string => {
  return shadeColor(color, value * -1)
}
