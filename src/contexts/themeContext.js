import { createContext, useContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

// 1. create a type of context
const ThemeContext = createContext(''); //import in all components or a useTheme hook

// custom hook useTheme to not have to type this in every component that needs themeContext:
// import { useContext } from 'react';
// import { ThemeContext } from '../contexts/themeContext';
export const useTheme = () => useContext(ThemeContext); // only import useTheme instead

// 2. create a Provider to get context into the tree, import in App
const ThemeProvider = props => {
  // LOCALSTORAGE:
  // instead of creating state with useState:
  // const [theme, setTheme] = useState('dark')
  // do it with useLocalStorageState hook to create state AND store in localStorage
  // at the same time, which also sets theme to 'dark' by default
  const [theme, setTheme] = useLocalStorageState('theme', 'dark');

  const toggleTheme = () => {
    setTheme(currTheme => (currTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider // 4. value = {state + any method changing state}
      value={{ theme, toggleTheme }}>
      ({props.children})
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
