import '../styles/CardBg.css';

import { useTheme } from '../contexts/themeContext';
// import { useTheme } from '../hooks/useTheme';

const CardBg = props => {
  const { theme } = useTheme();
  // console.log('theme from CARDBG:', theme);

  return <main className={`bg-card ${theme}`}>{props.children}</main>;
};

export default CardBg;
