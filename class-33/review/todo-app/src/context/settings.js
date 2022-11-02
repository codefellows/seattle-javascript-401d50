import { useState, createContext, useEffect } from 'react';

export const SettingsContext = createContext();

function SettingsProvider(props) {
  const [ showCompleted, setShowCompleted ] = useState(true);
  const [ numberOfItems, setNumberOfItems ] = useState(3);
  const [ sortBy, setSortBy ] = useState('added');

  // on Component Mount -> load settings from localstorage
  useEffect(() => {
    const storage = localStorage.getItem('settings');
    if(storage) {
      const storageObject = JSON.parse(storage);
      setShowCompleted(storageObject.showCompleted);
      setNumberOfItems(storageObject.numberOfItems);
      setSortBy(storageObject.sortBy);
    }
  }, []);

  // const setSort = (value) => {
  //   switch(value) {
  //     case 'added':
  //     case 'difficulty':
  //     default:
  //       alert('Invalid value');
  //   }
  // }

  return (
    <SettingsContext.Provider
      value = {{
        showCompleted, setShowCompleted,
        numberOfItems, setNumberOfItems,
        sortBy, setSortBy
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
