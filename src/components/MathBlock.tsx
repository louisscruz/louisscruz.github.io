import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';
import * as katex from 'katex';

interface MathBlockProps {
  children: string;
}

const MathBlock = React.memo<MathBlockProps>(({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) return;

    katex.render(children, currentElement);
  }, []);

  return <div ref={elementRef} />;
});

export default MathBlock;
