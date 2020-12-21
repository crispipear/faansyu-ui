import React from 'react'
import Demo from '../Demo';
import { Chip, Header, Paragraph } from 'faanshu-ui'

const codeString =
`
import React from 'react'
import { Chip } from 'faanshu-ui'

export default const Chip = () => {
  return (
    <div>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="info">Info</Chip>
      <Chip variant="disabled">Disabled</Chip>
    </div>
  )
}
`

const ChipPage = () => {
  return (
    <div>
      <Header color="primary">Chip</Header>
      <Paragraph>
        Components that show short label or keyword that describe item(s).
      </Paragraph>
      <Paragraph>
        Use Chips when content is mapped to multiple categories, and the user needs a way to differentiate between them.
      </Paragraph>
      <Demo code={codeString}>
        <Chip variant="primary">Primary</Chip>
        <Chip variant="secondary">Secondary</Chip>
        <Chip variant="success">Success</Chip>
        <Chip variant="warning">Warning</Chip>
        <Chip variant="info">Info</Chip>
        <Chip variant="disabled">Disabled</Chip>
      </Demo>
      <Header fontSize="m">Outlined</Header>
      <Paragraph>
        Alternative style.
      </Paragraph>
    </div>
  )
}

export default ChipPage
