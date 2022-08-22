import { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_THEME = 'dark';

/**
 * @returns {string} 'light' or 'dark'
 * @description priority: 1. local storage 2. system preferred color 3. default theme
 */
function getInitalTheme() {
  const storedTheme = window.localStorage.getItem('theme');
  const preferredColorScheme =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  if (['dark', 'light'].includes(storedTheme)) {
    return storedTheme;
  } else if (preferredColorScheme) {
    return preferredColorScheme.matches ? 'dark' : 'light';
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
