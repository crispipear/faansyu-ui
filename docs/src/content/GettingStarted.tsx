import React from 'react'
import { Header, Paragraph } from 'faansyu-ui'
import CodeSnippet from '../Demo/CodeSnippet';

const CODE_IMPORT = `
import { FsProvider } from 'faansyu-ui';

const App = () => {
  return (
      <FsProvider>
        <MyApp />
      </FsProvider>
  )
}
`
const CODE_USAGE = `
import { Header } from 'faansyu-ui';
  
const App = () => {
  return (
    <Header>Hello from faansyu-ui!</Header>
  )
}
`

const GettingStarted = () => {
  return (
    <>
      <Header>Getting started</Header>
      <Header anchor tag="h2">Installation</Header>
      <Header tag="h3">npm</Header>
      <pre className="code-line">npm install --save faansyu-ui</pre>
      <Header tag="h3">yarn</Header>
      <pre className="code-line">yarn add faansyu-ui</pre>
      <Header anchor tag="h2">Usage</Header>
      <Paragraph>
        Wrap your app with the faansyu-ui provider, this ensures the ui components render with consistent styles.
      </Paragraph>
      <CodeSnippet code={CODE_IMPORT} />
      <Paragraph>
        Use faansyu-ui components anywhere in your app.
      </Paragraph>
      <CodeSnippet code={CODE_USAGE} />
    </>
  )
}

export default GettingStarted;
