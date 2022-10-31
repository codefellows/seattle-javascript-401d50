import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './styles.scss';

function AppBar() {

  const {
    textSize,
    mode,
    color,
    borders,
  } = useContext(ThemeContext);

  return (
    <div className={`appbar theme-${mode} ${borders ? 'bordered' : 'unbordered'} color-${color}`}>
      <h2 className={`text-${textSize}`}>My Awesome Website</h2>
    </div>
  )
}

export default AppBar;
