import { ReactNode } from 'react';
import Navbar from './navbar/Navbar';

interface pageProps {
  children: ReactNode;
}

const Layout = ({ children }: pageProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
