import React from 'react'
import Demo, {createCodeString} from '../../Demo';
import { ApiTable } from '../../ApiTable';
import { HeaderApi, ParagraphApi, TextApi } from './Typograph.api';
import { Header, Paragraph, Link } from 'faansyu-ui';

export const CODE =
`
      <Header>Header main title</Header>
      <Header fontSize="m" color="primary">Subheader</Header>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Paragraph>
`;

const TypographyPage = () => {
  return (
    <>
      <Header>Typography</Header>
      <Paragraph>
        Basic text component to display headings, text and paragraphs.
      </Paragraph>
      <Demo code={createCodeString({component: "Typography", used: ["Header, Paragraph"], render: CODE})}>
        <Header>Header big title</Header>
        <Header fontSize="m" color="primary">Subheader</Header>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Link href="https://en.wikipedia.org/wiki/Cat" target="_blank">Click this link to learn about cats</Link>
      </Demo>

    <Header anchor tag="h2">API</Header>
    <ApiTable header="Header" api={HeaderApi} />
    <ApiTable header="Paragraph" api={ParagraphApi} />
    <ApiTable header="Text" api={TextApi} />
    </>
  )
}

export default TypographyPage
