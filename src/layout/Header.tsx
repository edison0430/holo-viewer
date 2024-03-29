import { useLocation } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import ReactGA from 'react-ga4'

import SideNav from './SideNav';
import MultiViewHeader from './MultiViewHeader';
import ThemeToggle from '@/components/theme/ThemeToggle';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen((prevState) => !prevState);

    ReactGA.event({
      category: 'app',
      action: 'open_navigation',
      label: String(isOpen)
    });
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case '/multi-view':
        return <MultiViewHeader />;
      default:
        return (
          <>
            <div className="text-xl tracking-wide font-bold flex-1">
              Holo Viewer
            </div>
            <div className="space-x-2">
              <ThemeToggle />
            </div>
          </>
        );
    }
  };

  return (
    <>
      <header className="h-14 w-full flex items-center bg-gray-400/90 dark:bg-gray-700/90 dark:text-gray-100 sticky top-0 z-10 backdrop-blur-sm px-4 space-x-2">
        <button onClick={toggle} className="w-6 h-6 flex-shrink-0">
          <MenuIcon />
        </button>
        {renderHeader()}
      </header>
      <SideNav isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default Navigation;
