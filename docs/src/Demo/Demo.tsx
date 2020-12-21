import React from 'react';
import CodeSnippet from './CodeSnippet';
import './Demo.css';

interface Props {
  code: string;
}

function Demo({children, code}: React.PropsWithChildren<Props> ): React.ReactElement {
  return (
    <div className="demo">
      <div className="demo-content">
        {children}
      </div>
      <CodeSnippet code={code} />
    </div>
  )
}

export default Demo
