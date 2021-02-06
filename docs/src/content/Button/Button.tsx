import React from 'react'
import Demo, { createCodeString } from '../../Demo';
import { Button, IconButton, Header, Paragraph } from 'faanshu-ui'
import {ButtonApi, IconButtonApi} from './Button.api'
import {ApiTable} from '../../ApiTable'

const CODE_BASIC =
`<Button>Primary button</Button>
      <Button variant="secondary" light>Secondary</Button>
      <Button variant="secondary" outlined>Outlined</Button>
      <Button variant="success" rounded>Rounded</Button>
      <Button variant="warning" rounded outlined>Warning</Button>
      <Button variant="info" rounded light>Info</Button>
      <Button clear>Clear button</Button>`
const CODE_STATES =
`<Button isLoading>Loading</Button>
      <Button isLoading light>Loading 2</Button>
      <Button isLoading outlined>Loading 3</Button>
      <Button disabled>Disabled</Button>
      <Button disabled light>Disabled 2</Button>
      <Button disabled outlined>Disabled 3</Button>`
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
        Use Buttons when content is mapped to multiple categories, and the user needs a way to differentiate between them.
      </Paragraph>
      <Paragraph>
        These button style props can be mix and matched for diffrent project designs.
        Make sure the button design provides visual contexts that differenciate these possible type of actions:
      </Paragraph>
      <ul>
        <li>Main action with most priority</li>
        <li>Secondary actions with no priorities</li>
        <li>Action directing the user to an internal or external link</li>
        <li>Dangerous action that needs warning</li>
        <li>Disabled action indicating exisitng action is not available</li>
      </ul>
      <Header fontSize="m">Styles</Header>
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
        <Button>Primary button</Button>
        <Button variant="secondary" light>Secondary</Button>
        <Button variant="secondary" outlined>Outlined</Button>
        <Button variant="warning" rounded>Warning</Button>
        <Button variant="success" rounded outlined>Rounded</Button>
        <Button variant="info" rounded light>Info</Button>
        <Button clear>Clear button</Button>
      </Demo>
      <Header fontSize="m">Other states</Header>
      <Demo
        code={
          createCodeString({
            component: "Button",
            used: ["Button"],
            render: CODE_STATES
          })
        }
        spacer={true}
      >
        <Button isLoading>Loading</Button>
        <Button isLoading light>Loading 2</Button>
        <Button isLoading outlined>Loading 3</Button>
        <Button disabled>Disabled</Button>
        <Button disabled light>Disabled 2</Button>
        <Button disabled outlined>Disabled 3</Button>
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
      <Header fontSize="m">API</Header>
      <ApiTable header="ButtonProps" api={ButtonApi} />
      <ApiTable header='IconButtonProps (Omit <ButtonProps, "rounded">)' api={IconButtonApi} />
    </div>
  )
}

export default ButtonPage
