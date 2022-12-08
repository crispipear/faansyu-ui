import React from 'react'
import { Header, Paragraph } from 'faansyu-ui'
import CodeSnippet from '../../Demo/CodeSnippet';
import { ShadeDemo } from './ShadeDemo';

const CODE_USE_THEMENAME = `
import { FsProvider } from 'faansyu-ui';

const App = () => {
  return (
      <FsProvider themeName='classicYam'>
        <MyApp />
      </FsProvider>
  )
}
`

const CODE_USE_CUSTOM_THEME = `
import { FsProvider } from 'faansyu-ui';

const myTheme = {
  colors: {
    primary: {
      light: 'rgb(229,231,243)',
      main: '#5F6AB7',
      dark: 'rgb(57,64,110)'
    },
    secondary: {
      main: '#8865AC'
    }
  }
}

const App = () => {
  return (
      <FsProvider theme={myTheme}>
        <MyApp />
      </FsProvider>
  )
}
`

const CODE_VARIANTS = `type Variant =
  'primary'
  | 'secondary'
  |'success'
  | 'info'
  |'warning'
  | 'disabled'
  | 'text'
  | 'border'`

const Theming = () => {
  return (
    <>
      <Header>Theming and styling</Header>
      <Header anchor tag="h2">Prerequisite</Header>
      <Paragraph>
        Make sure you have wrapped your app in the faansyu-ui provider.
        See <a href="./getting-started">Getting started</a>
      </Paragraph>
      <Header anchor tag="h2">Default themes</Header>
      <Paragraph>
        There are existing theme color schemes that can be used by passing in a theme name.
        Available options:
        <CodeSnippet>
        'defaultYam' | 'classicYam' | 'starFairies' | 'brightNight' | 'matchaCherry'
        </CodeSnippet>
      </Paragraph>
      <CodeSnippet code={CODE_USE_THEMENAME} />
      <Header anchor tag="h2">Custom themes</Header>
      <Paragraph>
        Use your own customizations or modifications to theme for values such as font size, spacing and colors.
      </Paragraph>
      <Paragraph>
        If a color variant is passed in with just the main color value, the light and dark shades will be calculated automatically.
      </Paragraph>
      <ShadeDemo />
      <Header anchor tag="h3">Example custom theme</Header>
      <CodeSnippet code={CODE_USE_CUSTOM_THEME} />
      <Header anchor tag="h2">Color system</Header>
      <Header tag="h3">Variants</Header>
      <Paragraph>
        Variants are for contextualizing colors for your UI to create hierachy and express branding.
        There are 8 types of color variants we use in a theme. Usually primary and secondary should
        be the main colors that represent the overall design and branding.
      </Paragraph>
      <CodeSnippet code={CODE_VARIANTS} />
      <Header tag="h3">Shades</Header>
      <Paragraph>
        Each color variant has 3 different shades: <b>main</b>, <b>light</b>, <b>dark</b>. These shades will apply to the UI components for extensive styling.
        By default, the shades <b>light</b> and <b>dark</b> are generated based on the provided <b>main</b> value.
      </Paragraph>
      <CodeSnippet>
      type Shade = 'light' | 'main' | 'dark'
      </CodeSnippet>
    </>
  )
}

export default Theming
