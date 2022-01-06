import Link from 'next/link';
import { ReactNode } from 'react';

interface SideNavLinkProps {
  href: string;
  children?: ReactNode;
}

export const SideNavLink = (props: SideNavLinkProps) => {
  return (
    <li className="py-2">
      <Link href={props.href} passHref>
        <a className="text-gray-500 h-6 flex items-center font-semibold hover:text-primary focus:text-primary transition-colors">
          {props.children}
        </a>
      </Link>
    </li>
  );
};
