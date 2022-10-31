import { useContext } from 'react';
import { ListContext } from '../context/ListContext';

function ListItems() {

  const context = useContext(ListContext);
  let items = context.list;
  return (
    // <ListContext.Consumer>
    //   {(context) => (
    //     <div className="item">
    //      <ul>
    //        {context.list.map((item, idx) => <li key={idx}>{item}</li>)}
    //      </ul>
    //    </div>
    //   ) }
    // </ListContext.Consumer>
    <div className="item" data-testid="items">
      <ul>
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  )
}

export default ListItems;
