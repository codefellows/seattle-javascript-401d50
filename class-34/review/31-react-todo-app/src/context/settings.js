import { createContext, useState, useEffect } from "react";

import { Storage } from "../lib/storage";
const storage = new Storage();
let storageChecked = false;

export const SettingsContext = createContext();

const defaultPaginationLength = 5

function SettingsProvider (props) {
  const [paginationLength, setPaginationLength] = useState(defaultPaginationLength);
  const [sortBy, setSortBy] = useState('NONE');
  const [showCompleted, setShowCompleted] = useState(false);
  useEffect(() => { 
    if (!storageChecked) {
      const settings = storage.getSettings();
      if (settings) { 
        setPaginationLength(settings.paginationLength);
        setShowCompleted(settings.showCompleted);
        setSortBy(settings.sortBy);
      }
      storageChecked = true;
    } else {
      storage.setSettings({
        paginationLength,
        sortBy,
        showCompleted
      });
    }
  }, [paginationLength, sortBy, showCompleted])
  return (
    <SettingsContext.Provider value={ {paginationLength, setSortBy, sortBy, setPaginationLength, showCompleted, setShowCompleted} }>
      { props.children }
    </SettingsContext.Provider>
  );
}

export default SettingsProvider