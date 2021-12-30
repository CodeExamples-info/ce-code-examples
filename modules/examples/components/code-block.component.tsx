import { KeyboardEvent, MouseEvent, RefObject } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { ExampleStepInterface } from '../interfaces/example-step.interface';

interface CodeBlockProps {
  step: ExampleStepInterface;
  containerRef: RefObject<HTMLDivElement>;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const handleScrolling = () => {
    const block = document.getElementById(`block-${props.step.id}`);
    if (block) {
      block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      props.containerRef.current?.scrollTo({ behavior: 'smooth', top: 0 });
    }
  };

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    handleScrolling();
    (e.target as any).blur();
  };

  const handleOnKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.key === 'Enter' || event.key === ' ') {
      handleScrolling();
    }
  };

  return (
    <div
      className="block border-transparent border-2 rounded mb-2 transition-all select-all cursor-pointer hover:border-slate-700 hover:bg-slate-700 hover:shadow-inner hover:shadow-slate-700 hover:scale-[1.02] focus:border-slate-700 focus:bg-slate-700 focus:shadow-inner focus:shadow-slate-700 focus:scale-[1.02] active:cursor-text"
      title={props.step.title}
      tabIndex={0}
      onClick={handleOnClick}
      onKeyPress={handleOnKeyPress}
    >
      <SyntaxHighlighter
        language="javascript"
        style={nightOwl}
        wrapLongLines={true}
        customStyle={{
          background: 'transparent',
          pointerEvents: 'none',
        }}
      >
        {props.step.code}
      </SyntaxHighlighter>
    </div>
  );
};
