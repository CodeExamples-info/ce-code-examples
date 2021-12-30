import { RefObject } from 'react';
import { ExampleStepInterface } from '../interfaces/example-step.interface';
import { CodeBlock } from './code-block.component';

interface ExampleCodeListProps {
  steps: ExampleStepInterface[];
  containerRef: RefObject<HTMLDivElement>;
}

export const ExampleCodeList = (props: ExampleCodeListProps) => {
  return (
    <div className="max-w-2xl p-5 text-white bg-slate-800 h-full overflow-y-auto">
      {props.steps.map((step: any) => (
        <CodeBlock step={step} key={step.id} containerRef={props.containerRef} />
      ))}
    </div>
  );
};
