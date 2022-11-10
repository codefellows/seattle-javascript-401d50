import { useSelector, useDispatch } from 'react-redux';
import peopleSlice from '../rtk-store/people';

function People() {

  let people = useSelector(state => state.people);
  let dispatch = useDispatch();

  let { add } = peopleSlice.actions;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(add({ name: 'Ryan', age: 40 }));
  }

  return (
    <div>
      <h1>People</h1>
      {people.map(person => <p>{person.name}</p>)}
      <button onClick={handleClick}>Add Person</button>
    </div>
  )
}

export default People;
