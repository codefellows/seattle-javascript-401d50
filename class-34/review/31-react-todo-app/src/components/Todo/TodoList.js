import { useContext, useState } from "react";
import { Card, ButtonGroup, Button } from "@blueprintjs/core";
import TodoItem from "./TodoItem";      
import { doFilter, doPaginate, doSort } from "../../lib/sorting";
import { SettingsContext } from '../../context/settings';


function TodoList({items, toggleComplete, deleteItem}) {

  const [idxStart, setIdxStart] = useState(0);
  const { paginationLength, sortBy, showCompleted } = useContext(SettingsContext);
  // const [paginatedItems, setPaginatedItems] = useState([]);

  const processList = (items) => { 
    const filtered = doFilter(items, showCompleted)
    const sorted = doSort(filtered, sortBy);
    const paginated = doPaginate(sorted, idxStart, paginationLength);
    return paginated;
  }

  const incrementIdxStart = () => {
    const next = idxStart+paginationLength
    if(next<items.length){
      setIdxStart(next);
    }
  }

  const decrementIdxStart = () => {
    const next = idxStart-paginationLength
    if (next >= 0) {
      setIdxStart(next);
    } else { 
      setIdxStart(0);
    }
  }

  const context = useContext(SettingsContext);
  return ( 
      <Card data-testid='todos-container'>
        {processList(items).map(item => (
          <TodoItem key={item.id} item={item} toggleComplete={toggleComplete} deleteItem={ deleteItem }  />
        ))}
      {
        items.length > context.paginationLength ?
        <ButtonGroup>
        <Button onClick={ decrementIdxStart }>&lt;</Button>
        <span className="bp4-button">Showing {idxStart + 1}-{idxStart + context.paginationLength} of {items.length}</span>
        <Button onClick={ incrementIdxStart }>&gt;</Button>
        </ButtonGroup>
        : ''
      }
      </Card>
   );
}

export default TodoList;

