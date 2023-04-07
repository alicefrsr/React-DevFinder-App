import '../styles/CardBg.css';

// import { useContext } from 'react';
// import { ThemeContext } from '../contexts/themeContext';
import { useTheme } from '../contexts/themeContext';

const CardBg = props => {
  const { theme } = useTheme();
  console.log('theme from CARD BG:', theme);

  return <main className={`bg-card ${theme}`}>{props.children}</main>;
};

export default CardBg;
