import React from 'react'
import Demo, { createCodeString } from '../Demo';
import { Button, IconButton, Header, Paragraph } from 'faanshu-ui'

const CODE_BASIC =
`<Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>`
const CODE_ALT =
`<Button variant="primary" light>Primary</Button>
      <Button variant="secondary" outlined>Secondary</Button>
      <Button variant="success" rounded>Success</Button>
      <Button variant="warning" rounded outlined>Warning</Button>
      <Button variant="info" rounded light>Info</Button>`
const CODE_ICON =
`<IconButton name="copy" />
      <IconButton name="copy" variant="text"/>
      <IconButton name="copy" clear={false}/>
      <IconButton name="copy" variant="secondary" light/>
      <IconButton name="copy" variant="warning" outlined/>`

const ButtonPage = () => {
  return (
    <div>
      <Header>Button</Header>
      <Paragraph>
        Components that show short label or keyword that describe item(s).
      </Paragraph>
      <Paragraph>
        Use Buttons when content is mapped to multiple categories, and the user needs a way to differentiate between them.
      </Paragraph>
      <Header fontSize="m">Basic</Header>
      <Demo
        code={
          createCodeString({
            component: "Button",
            used: ["Button"],
            render: CODE_BASIC
          })
        }
        spacer={true}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
      </Demo>
      <Header fontSize="m">Alternative styles</Header>
      <Demo
        code={
          createCodeString({
            component: "Button",
            used: ["Button"],
            render: CODE_ALT
          })
        }
        spacer={true}
      >
        <Button variant="primary" light>Primary</Button>
        <Button variant="secondary" outlined>Secondary</Button>
        <Button variant="success" rounded>Success</Button>
        <Button variant="warning" rounded outlined>Warning</Button>
        <Button variant="info" rounded light>Info</Button>
      </Demo>
      <Header fontSize="m">Icon button</Header>
      <Paragraph>
        Enables simple, intuitive action with minimal visual context.
      </Paragraph>
      <Demo
        code={
          createCodeString({
            component: "IconButton",
            used: ["IconButton"],
            render: CODE_ICON
          })
        }
        spacer={true}
      >
        <IconButton name="copy" />
        <IconButton name="copy" variant="text"/>
        <IconButton name="copy" clear={false}/>
        <IconButton name="copy" variant="secondary" light/>
        <IconButton name="copy" variant="warning" outlined/>
      </Demo>
    </div>
  )
}

export default ButtonPage
