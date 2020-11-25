import React from 'react'

import { Badge, YamThemeProvider } from 'yam-ui'
import 'yam-ui/dist/index.css'

const App = () => {
  return (
    <YamThemeProvider>
      <Badge text="Primary" />
      <Badge text="Secondary" variant="secondary" />
      <Badge text="Success" variant="success" />
      <Badge text="Info" variant="info" />
      <Badge text="Warning" variant="warning" />
      <Badge text="Disabled" variant="disabled" />
    </YamThemeProvider>
  )
}

export default App
