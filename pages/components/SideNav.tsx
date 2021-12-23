import { HomeIcon, RssIcon } from '@heroicons/react/outline';
import { FireIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export function SideNav() {
  return (
    <div className="border-r w-2/12 max-w[250px] h-full bg-slate-50 py-5 px-5">
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
            <a className="text-gray-500 h-6 flex items-center font-semibold hover:text-primary focus:text-primary transition-colors mt-3">
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
      <div className="text-xs">
        <h3 className="text-gray-500 font-semibold uppercase mb-5">Table of Contents</h3>
        <ul className="list-decimal list-inside">
          <li className="mb-3">
            {/* TODO: Handle onclick events */}
            <Link href="/" passHref>
              <a className="hover:font-medium hover:underline focus:font-medium focus:underline">Setup PassportJS</a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" passHref>
              <a className="hover:font-medium hover:underline focus:font-medium focus:underline">Add Google Plugin</a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" passHref>
              <a className="hover:font-medium hover:underline focus:font-medium focus:underline">Setup Express Route</a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" passHref>
              <a className="hover:font-medium hover:underline focus:font-medium focus:underline">Login Route</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
