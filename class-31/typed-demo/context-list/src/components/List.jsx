import { useContext } from 'react';
import ListItems from './ListItems.jsx';
import { ListContext } from '../context/ListContext';

// consume from the context object
function List() {

  // const {list} = useContext(ListContext);

  return (
    <div className="list">
      <ListItems />
    </div>
  )
}

export default List;
