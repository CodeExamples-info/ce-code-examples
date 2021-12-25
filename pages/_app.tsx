import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Header from './components/Header';
import SideNav from './components/SideNav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex items-start h-full">
        <SideNav />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
