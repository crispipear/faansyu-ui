import React from 'react'
import Demo from '../Demo';
import { Header, Paragraph, Icon } from 'faanshu-ui'

const codeString =
`
import React from 'react'
import { Header, Paragraph } from 'faanshu-ui'

export default const Typography = () => {
  return (
    <div>
      /
    </div>
  )
}
`

const AboutPage = () => {
  return (
    <div>
      <Header>About</Header>
      <Paragraph>
        Basic Icon
        <Icon name="copy"/>
      </Paragraph>
      <Demo code={codeString}>
      </Demo>
    </div>
  )
}

export default AboutPage
