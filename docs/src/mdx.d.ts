/// <reference types="@mdx-js/loader" />
/// <reference types="@mdx-js/react" />

declare module '*.mdx' {
  let MDXComponent: () => JSX.Element
  export default MDXComponent
}

declare module '@mdx-js/react'