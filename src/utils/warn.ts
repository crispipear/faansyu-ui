/* eslint-disable no-console */

export default function warn(message: string, component?: string): void {
  if (process.env.NODE_ENV !== 'production' && console !== undefined) {
    let warning = `Warning: ${message}`
    if (component) {
      warning = `<${component} /> `.concat(warning)
    }
    console.error(warning)
  }
}
