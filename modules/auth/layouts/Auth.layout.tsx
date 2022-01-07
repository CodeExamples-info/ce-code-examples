import Image from 'next/image';
import { ReactElement } from 'react';

interface AuthLayoutProps {
  children: ReactElement;
  image: StaticImageData;
  imageAlt: string;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center ">
      <div className="h-full w-1/2">{props.children}</div>
      <div className="h-full w-1/2 object-cover">
        <Image src={props.image} alt={props.imageAlt} layout="fill" />
      </div>
    </div>
  );
};
