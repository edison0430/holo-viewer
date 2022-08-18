import { createContext, useContext, useState, useEffect } from 'react';

import usePreferredColor from '../hooks/usePreferredColor';

const DEFAULT_THEME = 'dark';

/**
 * @returns {string} 'light' or 'dark'
 * @description priority: 1. local storage 2. system preferred color 3. default theme
 */
function getInitalTheme() {
  const storedTheme = window.localStorage.getItem('theme');
  if (['dark', 'light'].includes(storedTheme)) {
    return storedTheme;
  } else if (usePreferredColor) {
    return usePreferredColor;
  } else {
    return DEFAULT_THEME;
  }
}

export const ThemeContext = createContext(getInitalTheme());

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitalTheme());
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useDarkMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return {
    theme,
    toggleTheme,
    isDark,
  };
}
