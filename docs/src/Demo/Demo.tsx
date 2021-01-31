import React from 'react';
import CodeSnippet from './CodeSnippet';
import './Demo.css';
import { IconButton, Spacer, SpacerProps } from 'faanshu-ui'

interface Props {
  code: string;
  spacer?: boolean;
  spacerDirection?: SpacerProps['direction']; 
}

function Demo({children, code, spacer, spacerDirection}: React.PropsWithChildren<Props> ): React.ReactElement {
  const [showCode, setShowCode] = React.useState<boolean>(false);

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => navigator.clipboard.writeText(code)

  return (
    <div className="demo">
      <div className="demo__content">
        {
          spacer?
          <Spacer direction={spacerDirection} gap="xs">
            {children}
          </Spacer>
          :
          children
        }
      </div>
      <div className="demo__controls">
        <IconButton name="code" onClick={toggleCode}/>
        <IconButton name="copy" onClick={copyCode}/>
      </div>
      {
        showCode && <CodeSnippet code={code} />
      }
    </div>
  )
}

export default Demo
