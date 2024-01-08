import { createContext, useContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

export const ThemeContext = createContext('');

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = (props) => {
  ///// Save theme to LocalStorage // everything commented out moved to useLocalStorageState hook
  // 1. make piece of state based of value in localStorage
  // const getTheme = () => {
  //   return JSON.parse(window.localStorage.getItem('theme')) || 'dark'; // default to 'dark if theme is null
  // };

  // 2. set this to be initial value when defining state
  // const [theme, setTheme] = useState(getTheme());

  const [theme, setTheme] = useLocalStorageState('theme', 'dark');

  // 3. use useEffect to update localStorage when this piece of state changes
  // useEffect(() => {
  //   window.localStorage.setItem('theme', JSON.stringify(theme));
  // }, [theme]);

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      ({props.children})
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
