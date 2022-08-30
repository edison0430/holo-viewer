import Header from './Header';
import { ThemeProvider } from '../context/ThemeContext';

type LayoutProps = {
  children: React.ReactChild;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
