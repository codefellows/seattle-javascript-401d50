import { useState, createContext } from 'react';

export const ThemeContext = createContext();

function ThemeProvider(props) {

  let [mode, setMode] = useState('dark');
  let [textSize, setTextSize] = useState('small');
  let [color, setColor] = useState('red');
  let [borders, setBorders] = useState(true);

  // look into tailWind or StyledComponents

  return (
    <ThemeContext.Provider value={{mode, textSize, color, borders}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
