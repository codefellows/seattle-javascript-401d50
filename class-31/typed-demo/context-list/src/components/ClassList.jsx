import React from 'react';
import ListItems from './ListItems';
import {ListContext} from '../context/ListContext';

class ClassList extends React.Component {

  static contextType = ListContext;

  render() {
    return (
      <div className="list">
        <ListItems items={this.context.list}/>
      </div>
    )
  }
}

export default ClassList;
