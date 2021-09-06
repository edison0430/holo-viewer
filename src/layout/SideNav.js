import { NavLink } from 'react-router-dom';
import { MenuIcon, HomeIcon, ViewGridIcon } from '@heroicons/react/outline';
import { useEffect } from 'react';
import { useRef } from 'react';

function SideNav({ open, toggle }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current.contains(event.target)) {
        if (!open) return;
        toggle();
      }
    };

    window.addEventListener('click', handleOutsideClick, true);

    return () => window.removeEventListener('click', handleOutsideClick, true);
  }, [open, toggle]);

  return (
    <aside
      ref={ref}
      className={`fixed top-0 left-0 h-screen w-56 ${
        !open && '-translate-x-full'
      } bg-white z-10 transform duration-200`}
    >
      <div className="h-14 pl-4 mb-2 flex items-center space-x-4">
        <button onClick={toggle} className="w-6 h-6">
          <MenuIcon />
        </button>
        <div className="text-xl tracking-wide font-bold">Holo Viewer</div>
      </div>
      <nav>
        <NavLink
          to="/"
          exact
          className="py-2 px-4 flex items-center space-x-4 hover:bg-gray-100"
          activeClassName="bg-gray-200"
          onClick={toggle}
        >
          <HomeIcon className="h-6 w-6" />
          <span>首頁</span>
        </NavLink>
        <NavLink
          to="/multi-view"
          exact
          className="py-2 px-4 flex items-center space-x-4 hover:bg-gray-100"
          activeClassName="bg-gray-200"
          onClick={toggle}
        >
          <ViewGridIcon className="h-6 w-6" />
          <span>多窗閱覽</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default SideNav;
