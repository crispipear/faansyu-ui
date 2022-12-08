import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: Arial, Helvetica, -apple-system, BlinkMacSystemFont,'Roboto', 'Oxygen',
  'Fira Sans', 'Droid Sans', sans-serif;
  }
  h1 { font-size: 2rem; }
  h2 { font-size: 1.6rem; }
  h3 { font-size: 1.2rem; }
  h4 { font-size: 0.96rem; }
  h5 { font-size: 0.84rem; }
  h6 { font-size: 0.76rem; }
`

export default GlobalStyle
