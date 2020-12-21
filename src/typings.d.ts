import { FsTheme } from './fs.types'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends FsTheme {}
}

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}
