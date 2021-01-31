import React from 'react'
import Demo from '../Demo';
import { Header, Tag, Paragraph, Spacer } from 'faanshu-ui'

const CODE =
`
import React from 'react'
import { Tag } from 'faanshu-ui'

export default const Tag = () => {
  return (
    <div>
      <Tag>default tag</Tag>
      <Tag variant="secondary">example 1</Tag>
    </div>
  )
}
`

const CODE_ALT =
`
import React from 'react'
import { Tag } from 'faanshu-ui'

export default const Tag = () => {
  return (
    <div>
      <Tag>Primary</Tag>
      <Tag variant="secondary" outlined>Secondary</Tag>
      <Tag variant="success" rounded>Success</Tag>
      <Tag variant="info" light={false}>Info</Tag>
      <Tag variant="warning" rounded outlined>Warning</Tag>
    </div>
  )
}
`

const TagPage = () => {
  return (
    <div>
      <Header>Tag</Header>
      <Paragraph>
        Components that show short label or keyword that describe item(s).
      </Paragraph>
      <Paragraph>
        Use Tags when content is mapped to multiple categories, and the user needs a way to differentiate between them.
      </Paragraph>
      <Demo code={CODE} spacer={true}>
          <Tag>default tag</Tag>
          <Tag variant="secondary">example 1</Tag>
      </Demo>
      <Header fontSize="m">Alternative styles</Header>
      <Demo code={CODE_ALT} spacer={true}>
          <Tag>Primary</Tag>
          <Tag variant="secondary" outlined>Secondary</Tag>
          <Tag variant="success" rounded>Success</Tag>
          <Tag variant="info" light={false}>Info</Tag>
          <Tag variant="warning" rounded outlined>Warning</Tag>
      </Demo>
    </div>
  )
}

export default TagPage
