import { RefObject } from 'react';
import { IExampleStep } from '../interfaces/example-step.interface';
import { CodeBlock } from './CodeBlock.component';

interface ExampleCodeListProps {
  steps: IExampleStep[];
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
