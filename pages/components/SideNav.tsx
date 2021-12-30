import { HomeIcon, RssIcon } from '@heroicons/react/outline';
import { FireIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import exampleStepsContext from '../_contexts/exampleSteps.context';

export function SideNav() {
  return (
    <div className="border-r w-2/12 min-w-[175px] max-w-[250px] h-full bg-slate-50 py-5 px-5">
      <ul>
        <li>
          {/* TODO: Convert into Separate component? */}
          <Link href="/" passHref>
            <a className="text-gray-500 h-6 flex items-center font-semibold hover:text-primary focus:text-primary transition-colors">
              <HomeIcon className="h-5 mr-3" />
              <span className="mt-0.5 text-sm">Home</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="text-gray-500 h-6 flex items-center font-semibold hover:text-primary focus:text-primary transition-colors mt-3 hover:first:fill-orange-500">
              <FireIcon className="h-5 mr-3" />
              <span className="mt-0.5 text-sm">Trending</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="text-gray-500 h-6 flex items-center font-semibold hover:text-primary focus:text-primary transition-colors mt-3">
              <RssIcon className="h-5 mr-3" />
              <span className="mt-0.5 text-sm">Latest</span>
            </a>
          </Link>
        </li>
      </ul>
      <hr className="border-y-[0.75px] border-slate-300/60 my-6" />
      {/* NOTE: as this will only show up on the /examples/*, we can simply use the useReducer for this and set this data on the example page */}
      {/* TODO: Move this to separate component */}
      <div className="text-xs">
        <h3 className="text-gray-500 font-semibold uppercase mb-5">Table of Contents</h3>
        <ul className="list-decimal list-inside text-sm">
          <exampleStepsContext.Consumer>
            {/* TODO: Only show up on `/examples/*` You can simply achieve this by toggling the TableOfContent component here on the base of length of steps and pass steps to the component
      OR: inside the table of component or this component, and use `useContext` to get values */}
            {({ steps }) => {
              return steps.map((step: any, index) => {
                return step.title ? (
                  <li className="mb-3" key={step.id}>
                    {/* TODO: Handle onclick events */}
                    <Link href={`#block-${step.id}`} passHref>
                      <a className="hover:font-medium hover:underline hover:underline-offset-2 focus:font-medium focus:underline">
                        {step.title}
                      </a>
                    </Link>
                  </li>
                ) : null;
              });
            }}
          </exampleStepsContext.Consumer>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
