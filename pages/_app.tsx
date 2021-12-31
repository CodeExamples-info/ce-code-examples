import type { AppProps } from 'next/app';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Header from '../common/components/Header.component';
import SideNav from '../common/components/SideNav/SideNav.component';
import exampleStepsContext from '../modules/examples/hooks/exampleSteps.context.hook';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [exampleSteps, setExampleSteps] = useState([]);

  return (
    <exampleStepsContext.Provider value={{ steps: exampleSteps, setSteps: setExampleSteps }}>
      <div className="h-screen overflow-hidden grid grid-flow-row">
        <Header />
        <div className="flex items-stretch h-[calc(100vh_-_4rem)]">
          <SideNav />
          <Component {...pageProps} />
        </div>
        {/* TODO: Add slim footer here, or at the bottom of sidenav (SideNav is better) */}
      </div>
    </exampleStepsContext.Provider>
  );
}

export default MyApp;
