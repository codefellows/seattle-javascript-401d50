import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../context/settings.js';

import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const contextValues = useContext(SettingsContext);
  const [getInput, setGetInput] = useState(contextValues.pagination);
  console.log(contextValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  const paginate = () => {
    // list -> total items to display

    // return a sub array, starting from current Index, going to current Index + Pagination.
    return list.slice(currentIndex, currentIndex + contextValues.pagination); // aren't we adding!
  }
  const next = () => {
    setCurrentIndex(currentIndex + contextValues.pagination);
  }
  const previous = () => {
    setCurrentIndex(currentIndex - contextValues.pagination);
  }

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      {/* We only want the number of items displayed as specified by pagination */}
      {paginate().map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
      {/* Add some buttons for moving our pagination values */}
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>

      <form onSubmit={(e) => {
        e.preventDefault();
        contextValues.updatePagination(e.target.paginationValue.value);
      }}>
        <input type='number' name="paginationValue"/>
        <button type="submit">Update Pagination</button>
      </form>
    </>
  );
};

export default ToDo;
