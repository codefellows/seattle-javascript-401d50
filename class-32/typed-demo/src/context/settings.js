import { useState, createContext, useEffect } from 'react';

// context is Created!
export const SettingsContext = createContext();

// create our Provider that grants Child Consumers access to values
function SettingsProvider(props) { // we need this, app tells us what children we need to render!

  // context values to share with children
  let [pagination, setPagination] = useState(3);
  let [sort, setSort] = useState('');
  let [display, setDisplay] = useState(false);
  let [error, setError] = useState(null);

  const updatePagination = (value) => {
    if (parseInt(value)) { // we know that value is an integer if truthy
      setPagination(value);
      setError(null);
      localStorage.setItem('settings', JSON.stringify({ pagination, sort, display }));
    } else {
      // alert('Please set pagination to a number');
      setError('Please set pagination to a number');
    }
  }

  // when component mounts, load our settings from localStorage
  useEffect(() => {
    let savedSettings = localStorage.getItem('settings');
    // set them back into context values.
  }, []);

  return (
    <SettingsContext.Provider value={{ pagination, sort, display, updatePagination, settingsError: error, setError }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;

