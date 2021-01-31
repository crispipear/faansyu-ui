import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import github from 'react-syntax-highlighter/dist/cjs/styles/hljs/github';

interface Props {
  code?: string;
}

function CodeSnippet({code}: Props): React.ReactElement {
  return (
    <div className="code-snippet">
      <div className="code-snippet__content">
        <SyntaxHighlighter language="javascript" style={github}>
         {code}
       </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeSnippet
