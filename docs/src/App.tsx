import React from 'react'

import { Chip, FsThemeProvider } from 'faanshu-ui'
import 'faanshu-ui/dist/index.css'

const App = () => {
  return (
    <FsThemeProvider>
      <Chip text="Primary light" shade="light"/>
      <Chip text="Primary" />
      <Chip text="Primary dark" shade="dark"/>
      <Chip text="Secondary light" variant="secondary" shade="light"/>
      <Chip text="Secondary" variant="secondary" />
      <Chip text="Secondary dark" variant="secondary" shade="dark"/>
      <Chip text="Success" variant="success" />
      <Chip text="Info" variant="info" />
      <Chip text="Warning" variant="warning" />
      <Chip text="Disabled" variant="disabled" />
    </FsThemeProvider>
  )
}

export default App
