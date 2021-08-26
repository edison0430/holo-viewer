import { MenuIcon, HomeIcon } from '@heroicons/react/outline';
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

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open]);

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
        <a
          href=""
          className="py-2 px-4 flex items-center space-x-4 hover:bg-gray-100 "
        >
          <HomeIcon className="h-6 w-6" />
          <span>首頁</span>
        </a>
      </nav>
    </aside>
  );
}

export default SideNav;
