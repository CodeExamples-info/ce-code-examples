import { createContext } from 'react';
import { IExampleStep } from '../interfaces/example-step.interface';

interface IExampleStepsContext {
  steps: IExampleStep[];
  setSteps: (steps: IExampleStep[]) => void;
}

const exampleStepsContext = createContext<IExampleStepsContext>({
  steps: [],
  setSteps: (steps) => {},
});

export default exampleStepsContext;
