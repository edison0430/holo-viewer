import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import SideNav from './SideNav';

function Navigation() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="h-14 w-full flex items-center bg-gray-400/90 sticky top-0 z-10 backdrop-blur-sm pl-4 space-x-4">
        <button onClick={toggle} className="w-6 h-6">
          <MenuIcon />
        </button>
        <div className="text-xl tracking-wide font-bold">Holo Viewer</div>
      </header>
      <SideNav open={open} toggle={toggle} />
    </>
  );
}

export default Navigation;
