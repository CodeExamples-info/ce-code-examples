import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import exampleStepsContext from '../../../../modules/examples/hooks/exampleSteps.context.hook';

// TODO: add return type for all functional components
export const SideNavTOC = () => {
  const { steps } = useContext(exampleStepsContext);
  const router = useRouter();

  console.log(router.route);

  if (router.route !== '/examples/[id]' || steps.length === 0) {
    return null;
  }

  return (
    <div className="text-xs">
      <h3 className="text-gray-500 font-semibold uppercase mb-5">Table of Contents</h3>
      <ul className="list-decimal list-inside text-sm">
        {steps.map((step: any) => {
          return step.description ? (
            <li className="mb-3" key={step.id}>
              {/* TODO: Handle onclick events */}
              <Link href={`#block-${step.id}`} passHref>
                <a className="hover:font-medium hover:underline hover:underline-offset-2 focus:font-medium focus:underline">
                  {step.title}
                </a>
              </Link>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};
