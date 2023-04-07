import '../styles/DevFinderApp.css';

// import { useContext } from 'react';
// import { ThemeContext } from '../contexts/themeContext';
import { useTheme } from '../contexts/themeContext';

const DevFinderApp = props => {
  const { theme } = useTheme();
  // console.log('theme from DEVFINDER APP:', theme);

  return <div className={`container ${theme}`}>{props.children}</div>;
};

export default DevFinderApp;
