// <div id={`block-${step.id}`} key={step.id} className="scroll-m-8">
//   {step.title ? <h3>{step.title}</h3> : ''}
//   {step.description ? <div dangerouslySetInnerHTML={{ __html: step.description }}></div> : ''}
// </div>;

import { ExampleStepInterface } from '../interfaces/example-step.interface';

interface CodeDescriptionProps {
  step: ExampleStepInterface;
}

export const CodeDescription = (props: CodeDescriptionProps) => {
  if (!props.step.description) return null;

  return (
    <div id={`block-${props.step.id}`} className="scroll-m-8">
      <h3>{props.step.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.step.description }}></div>
    </div>
  );
};
