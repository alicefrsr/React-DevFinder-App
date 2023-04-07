import { createContext, useState, useContext } from 'react';
// import useLocalStorageState from '../hooks/useLocalStorageState';

export const ThemeContext = createContext('');

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = props => {
  const [theme, setTheme] = useState('dark');
  // const [theme, setTheme] = useLocalStorageState('theme', 'dark');
  const toggleTheme = () => {
    setTheme(currTheme => (currTheme === 'dark' ? 'light' : 'dark'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>({props.children})</ThemeContext.Provider>;
};

export default ThemeProvider;
