import { ReactElement } from 'react';
import Header from '../../../common/components/Header.component';
import SideNav from '../../../common/components/SideNav/SideNav.component';

interface ExamplePageLayoutProps {
  children: ReactElement;
}

export const ExamplePageLayout = ({ children }: ExamplePageLayoutProps) => {
  return (
    <>
      <div className="h-screen overflow-hidden grid grid-flow-row">
        <Header />
        <div className="flex items-stretch h-[calc(100vh_-_4rem)]">
          <SideNav />
          {children}
        </div>
        {/* TODO: Add slim footer here, or at the bottom of sidenav (SideNav is better) */}
      </div>
    </>
  );
};
