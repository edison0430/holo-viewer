const preferredColorScheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

export default preferredColorScheme
  ? preferredColorScheme.matches
    ? 'dark'
    : 'light'
  : null;
