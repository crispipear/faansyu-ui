import React from 'react'
import Demo, { createCodeString } from '../../Demo';
import { Header, Button, IconButton, Paragraph } from 'faansyu-ui';
import { ButtonApi, IconButtonApi } from './Button.api';
import { ApiTable } from '../../ApiTable';

export const CODE_BASIC =
`<Button>Primary button</Button>
      <Button variant="secondary" light>Secondary</Button>
      <Button variant="secondary" outlined>Outlined</Button>
      <Button variant="success" rounded>Rounded</Button>
      <Button variant="warning" rounded outlined>Warning</Button>
      <Button variant="info" rounded light>Info</Button>
      <Button clear>Clear button</Button>`
export const CODE_STATE_LOADING = 
`<Button isLoading>Loading</Button>
      <Button isLoading light>Loading 2</Button>
      <Button isLoading outlined>Loading 3</Button>`
export const CODE_STATE_DISABLED = 
`<Button isLoading>Loading</Button>
      <Button isLoading light>Loading 2</Button>
      <Button isLoading outlined>Loading 3</Button>`
export const CODE_LINK =
`<Button href="./#" clear>Internal link</Button>
      <Button href="https://reactjs.org" outline>External link</Button>`
export const CODE_ICON =
`<IconButton name="copy" />
      <IconButton name="copy" variant="text"/>
      <IconButton name="copy" clear={false}/>
      <IconButton name="copy" variant="secondary" light/>
      <IconButton name="copy" variant="warning" outlined/>`

const ButtonDoc = () => {
  return (
    <>
      <Header>Button</Header>
      <Paragraph>
        Components that show short label or keyword that describe item(s).
        Use Buttons when content is mapped to multiple categories, and the user needs a way to differentiate between them.
      </Paragraph>
      <Paragraph>
        These button style props can be mix and matched for diffrent project designs.
        Make sure the button design provides visual contexts that differenciate these possible type of actions:
        <ul>
          <li>
            Main action with most priority  
          </li>
          <li>
            Secondary actions with no priorities
          </li>
          <li>
            Action directing the user to an internal or external link
          </li>
          <li>
            Dangerous action that needs warning
          </li>
          <li>
            Disabled action indicating exisitng action is not available
          </li>
        </ul>
      </Paragraph>
      <Header anchor tag="h2">Basic Button styles</Header>
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

      <Header anchor tag="h2">Link Button</Header>
      Use <code>href</code> to define a url for the button that directs the user to an internal/external link.

      <Demo
        code={
          createCodeString({
            component: "Button",
            used: ["Button"],
            render: CODE_LINK
          })
        }
        spacer={true}
      >
        <Button href="./#" clear>Internal link</Button>
        <Button href="https://reactjs.org" outlined>External link</Button>
      </Demo>

      <Header anchor tag="h2">Loading Button</Header>
      <Demo
        code={
          createCodeString({
            component: "Button",
            used: ["Button"],
            render: CODE_STATE_LOADING
          })
        }
        spacer={true}
      >
        <Button isLoading>Loading</Button>
        <Button isLoading light>Loading 2</Button>
        <Button isLoading outlined>Loading 3</Button>
      </Demo>


      <Header anchor tag="h2">Disabled Button</Header>
      <Demo
        code={
          createCodeString({
            component: "Button",
            used: ["Button"],
            render: CODE_STATE_DISABLED
          })
        }
        spacer={true}
      >
        <Button disabled>Disabled</Button>
        <Button disabled light>Disabled 2</Button>
        <Button disabled outlined>Disabled 3</Button>
      </Demo>

      <Header anchor tag="h2">Icon Button</Header>
      Enables simple, intuitive action with minimal visual context.
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
        <IconButton name="copy" variant="text" />
        <IconButton name="copy" clear={false} />
        <IconButton name="copy" variant="secondary" light />
        <IconButton name="copy" variant="warning" outlined />
      </Demo>

      <Header anchor tag="h2">API</Header>
      <ApiTable header="Button" api={ButtonApi} />
      <ApiTable header='Icon button' api={IconButtonApi} />
    </>
  )
}

export default ButtonDoc;