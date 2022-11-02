import React from 'react';

function Header({ incomplete }) {
  return (
    <div className='bp4-callout'>
        <h1 className='bp4-heading'>To Do List: {incomplete} items pending</h1>
    </div>
  )
}

export default Header;