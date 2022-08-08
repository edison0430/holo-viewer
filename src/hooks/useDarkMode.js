import { useState, useEffect } from 'react';

const getInitialTheme = () => {
  const storedTheme = window.localStorage.getItem('darkMode');

  if (storedTheme) {
    return JSON.parse(storedTheme);
  } else {
    // fetch system prefererd color
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
};

const useDarkMode = () => {
  const [isEnabled, setIsEnabled] = useState(getInitialTheme());

  const toggle = () => setIsEnabled(!isEnabled);

  useEffect(() => {
    if (isEnabled) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('darkMode', true);
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('darkMode', false);
    }
  }, [isEnabled]);

  return [isEnabled, toggle];
};

export default useDarkMode;
