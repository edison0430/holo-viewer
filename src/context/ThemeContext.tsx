import { createContext, useContext, useState, useEffect } from 'react';

type Valid_Theme = 'dark' | 'light';

type ThemeContextType = {
  theme: Valid_Theme;
  toggleTheme: () => void;
};

const DEFAULT_THEME = 'dark';

function getInitalTheme() {
  const storedTheme = window.localStorage.getItem('theme') || '';
  const preferredColorScheme =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  if (['dark', 'light'].includes(storedTheme)) {
    return storedTheme as Valid_Theme;
  } else if (preferredColorScheme) {
    return preferredColorScheme.matches ? 'dark' : 'light';
  } else {
    return DEFAULT_THEME;
  }
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
});

type ThemeProviderPrsop = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderPrsop) {
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

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return {
    theme,
    toggleTheme,
    isDark,
  };
}
