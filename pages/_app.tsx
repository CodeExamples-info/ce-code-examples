import type { AppProps } from 'next/app';
import smoothscroll from 'smoothscroll-polyfill';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Header from './components/Header';
import SideNav from './components/SideNav';

// kick off the polyfill!
smoothscroll.polyfill();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-hidden grid grid-flow-row">
      <Header />
      <div className="flex items-stretch h-[calc(100vh_-_4rem)]">
        <SideNav />
        <Component {...pageProps} />
      </div>
      {/* TODO: Add slim footer here, or at the bottom of sidenav (SideNav is better) */}
    </div>
  );
}

export default MyApp;
