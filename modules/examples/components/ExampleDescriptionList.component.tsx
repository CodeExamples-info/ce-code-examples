import { RefObject } from 'react';
import { ExampleStepInterface } from '../interfaces/example-step.interface';
import { CodeDescription } from './CodeDescription.component';

interface ExampleDescriptionListProps {
  steps: ExampleStepInterface[];
  title: string;
  description: string;
  containerRef: RefObject<HTMLDivElement>;
}

export const ExampleDescriptionList = (props: ExampleDescriptionListProps) => {
  return (
    <div
      className="w-auto p-5 prose prose-p:text-slate-900 prose-pre:bg-slate-800 h-full overflow-y-auto max-w-none scroll-smooth"
      tabIndex={0}
      ref={props.containerRef}
    >
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.description }}></div>

      {/* Steps */}
      {props.steps.map((step: any) => (
        <CodeDescription step={step} key={step.id} />
      ))}
    </div>
  );
};
