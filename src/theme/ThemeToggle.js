import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const getTheme = () => {
  const theme = window.localStorage.getItem('theme');
  return theme === 'dark';
};

const ThemeToggle = () => {
  const [toggle, setToggle] = useState(getTheme());

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [toggle]);

  return (
    <div onClick={() => triggerToggle()} className="relative cursor-pointer">
      <div className="w-12 h-6 rounded-full bg-gray-900">
        <div className="absolute top-[2px] left-[2px]">
          <MoonIcon className="w-5 h-5 text-yellow-400" />
        </div>
        <div className="absolute top-[2px] right-[2px]">
          <SunIcon className="w-5 h-5 text-yellow-400" />
        </div>
      </div>
      <div
        className={`absolute top-[1px] w-[22px] h-[22px] ${
          toggle ? 'left-6' : 'left-[1px]'
        } bg-gray-100 rounded-full duration-200`}
      ></div>
    </div>
  );
};

export default ThemeToggle;
