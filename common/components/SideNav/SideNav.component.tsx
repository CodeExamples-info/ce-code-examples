import { HomeIcon, RssIcon } from '@heroicons/react/outline';
import { FireIcon } from '@heroicons/react/solid';
import { SideNavLink } from './components/SideNavLink.component';
import { SideNavTOC } from './components/SideNavTOC.component';

export function SideNav() {
  return (
    <div className="border-r w-2/12 min-w-[175px] max-w-[250px] h-full bg-slate-50 py-5 px-5">
      <ul>
        <SideNavLink href="/">
          <HomeIcon className="h-5 mr-3" />
          <span className="mt-0.5 text-sm">Home</span>
        </SideNavLink>
        <SideNavLink href="/">
          <FireIcon className="h-5 mr-3" />
          <span className="mt-0.5 text-sm">Trending</span>
        </SideNavLink>
        <SideNavLink href="/">
          <RssIcon className="h-5 mr-3" />
          <span className="mt-0.5 text-sm">Latest</span>
        </SideNavLink>
      </ul>

      <hr className="border-y-[0.75px] border-slate-300/60 my-6" />

      <SideNavTOC />
    </div>
  );
}

export default SideNav;
