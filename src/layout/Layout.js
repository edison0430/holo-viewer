import Header from './Header';
import { ThemeProvider } from '../context/ThemeContext';

function Layout(props) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <main>{props.children}</main>
      </ThemeProvider>
    </>
  );
}

export default Layout;
