import { SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white w-full flex items-center px-5 h-16 border-y">
      <div className="w-2/12 max-w-[250px]">
        <Link href="/" passHref>
          <a className="inline-flex items-center font-bold text-primary text-lg hover:opacity-70 focus:opacity-70 transition-opacity">
            {/* <span className="inline-block h-10 w-10">
            <BrandLogoPrimary />
          </span> */}
            {/* CodeExamples<span className="text-primary">.info</span> */}
            CodeExamples
          </a>
        </Link>
      </div>
      <div className="w-7/12 flex items-center px-5 relative h-full">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search examples..."
          className="peer ml-2 placeholder:text-gray-500 font-medium border-b focus:outline-none h-16 focus:border-b-2 focus:border-accent-dark absolute left-0 pl-8 w-full max-w-xl"
        />
        <label htmlFor="search" className="text-gray-500 absolute left-3 z-10 cursor-text peer-focus:text-accent-dark">
          <SearchIcon height={20} />
        </label>
      </div>
      <ul className="w-3/12 ml-auto flex items-center justify-end font-medium">
        <li>
          <Link href="/auth/login" passHref>
            <a className="hover:text-accent-dark focus:text-accent-dark transition-colors">Login</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/sign-up">
            <a className="ml-4 bg-primary text-white text-sm rounded-md py-2 px-3 drop-shadow-none hover:shadow-md hover:shadow-primary/20">
              Sign Up
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
