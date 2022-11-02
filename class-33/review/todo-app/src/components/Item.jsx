import React from 'react';
import { Card } from '@blueprintjs/core';
import './../styles/card.css';

function Item({ item, toggleComplete, deleteItem }) {
  return (
    <Card className='item-card'>
      <div className='card-header'>
        <p onClick={() => toggleComplete(item.id)}>
          {item.complete ? 'Complete' : 'Pending'}
        </p>
        <p>{item.assignee}</p>
        <p id='delete' onClick={() => deleteItem(item.id)}>x</p>
      </div>


      <hr />
      <p>{item.text}</p>
      <p><small>Difficulty: {item.difficulty}</small></p>



    </Card>
  )
}

export default Item;