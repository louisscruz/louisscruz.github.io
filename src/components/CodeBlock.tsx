import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  children: string;
}

const CodeBlock = React.memo<CodeBlockProps>(({ children }) => (
  <SyntaxHighlighter language="typescript" style={dark}>
    {children.trim()}
  </SyntaxHighlighter>
));

export default CodeBlock;
