import '../styles/DevFinderApp.css';

import { useTheme } from '../contexts/themeContext';
// import { useTheme } from '../hooks/useTheme';

const DevFinderApp = props => {
  const { theme } = useTheme();
  // console.log('theme from DEVFINDERAPP:', theme);

  return (
    <div>
      <div className={`container ${theme}`}>{props.children}</div>
    </div>
  );
};

export default DevFinderApp;
