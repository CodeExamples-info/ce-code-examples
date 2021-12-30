import { createContext } from 'react';

const exampleStepsContext = createContext({
  steps: [],
  // TODO: Add types here
  setSteps: (steps: any) => {},
});

export default exampleStepsContext;
