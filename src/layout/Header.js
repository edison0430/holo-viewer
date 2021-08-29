import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import SideNav from './SideNav';
import StreamCircleList from '../stream/StreamCircleList';

function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case '/multi-view':
        return <StreamCircleList />;
      default:
        return (
          <div className="text-xl tracking-wide font-bold">Holo Viewer</div>
        );
    }
  };

  return (
    <>
      <Router>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
      <header className="h-14 w-full flex items-center bg-gray-400/90 sticky top-0 z-10 backdrop-blur-sm pl-4 space-x-4">
        <button onClick={toggle} className="w-6 h-6">
          <MenuIcon />
        </button>
        {renderHeader()}
      </header>
      <SideNav open={open} toggle={toggle} />
    </>
  );
}

export default Navigation;
