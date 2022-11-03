import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import TodoNavbar from './Navbar';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Auth from '../../auth/Auth';


const Todo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

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
      if ( item.id === id ) {
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

  return (
    <>
      <TodoNavbar />
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <Auth capability="create">
        <AddTodoForm {...{addItem, defaultValues}} />
      </Auth>
      <Auth capability="read">
        <TodoList items={list} deleteItem={ deleteItem } toggleComplete={toggleComplete} /> 
      </Auth>
    </>
  );
};

export default Todo;