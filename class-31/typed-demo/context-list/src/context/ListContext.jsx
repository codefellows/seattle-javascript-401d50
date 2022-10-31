import { useState, createContext } from 'react';

// use this to create consumers.
export const ListContext = createContext();

// use this to add to App component.
function ListProvider(props) {

  const [list, setList] = useState([
    'Die Hard',
    'The Bee Movie'
  ]);

  return (
    // "value" is the context values that other components will read from, not banana
    <ListContext.Provider value={{ list }}>
      {/* Any component that is a child of the Provider */}
      {props.children}
    </ListContext.Provider>
  )
}

export default ListProvider;
