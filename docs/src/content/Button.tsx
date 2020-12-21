import React from 'react'
import Demo from '../Demo';
import { Button, Header, Paragraph } from 'faanshu-ui'

const CODE_BASIC =
`
import React from 'react'
import { Button } from 'faanshu-ui'

export default const Button = () => {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
    </div>
  )
}
`
const CODE_ALT =
`
import React from 'react'
import { Button } from 'faanshu-ui'

export default const Button = () => {
  return (
    <div>
      <Button variant="primary" light>Primary</Button>
      <Button variant="secondary" light>Secondary</Button>
      <Button variant="success" light>Success</Button>
      <Button variant="warning" light>Warning</Button>
      <Button variant="info" light>Info</Button>
      <br/>
      <Button variant="primary" outlined>Primary</Button>
      <Button variant="secondary" outlined>Secondary</Button>
      <Button variant="success" outlined>Success</Button>
      <Button variant="warning" outlined>Warning</Button>
      <Button variant="info" outlined>Info</Button>
      <br/>
      <Button variant="primary" rounded>Primary</Button>
      <Button variant="secondary" rounded>Secondary</Button>
      <Button variant="success" rounded>Success</Button>
      <Button variant="warning" rounded>Warning</Button>
      <Button variant="info" rounded>Info</Button>
    </div>
  )
}
`

const ButtonPage = () => {
  return (
    <div>
      <Header color="primary">Button</Header>
      <Paragraph>
        Components that show short label or keyword that describe item(s).
      </Paragraph>
      <Paragraph>
        Use Buttons when content is mapped to multiple categories, and the user needs a way to differentiate between them.
      </Paragraph>
      <Header fontSize="m">Basic</Header>
      <Demo code={CODE_BASIC}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
      </Demo>
      <Header fontSize="m">Alternative styles</Header>
      <Paragraph>
        Light, outlined, rounded
      </Paragraph>
      <Demo code={CODE_ALT}>
        <Button variant="primary" light>Primary</Button>
        <Button variant="secondary" light>Secondary</Button>
        <Button variant="success" light>Success</Button>
        <Button variant="warning" light>Warning</Button>
        <Button variant="info" light>Info</Button>
        <br/>
        <Button variant="primary" outlined>Primary</Button>
        <Button variant="secondary" outlined>Secondary</Button>
        <Button variant="success" outlined>Success</Button>
        <Button variant="warning" outlined>Warning</Button>
        <Button variant="info" outlined>Info</Button>
        <br/>
        <Button variant="primary" rounded>Primary</Button>
        <Button variant="secondary" rounded>Secondary</Button>
        <Button variant="success" rounded>Success</Button>
        <Button variant="warning" rounded>Warning</Button>
        <Button variant="info" rounded>Info</Button>
      </Demo>
    </div>
  )
}

export default ButtonPage
