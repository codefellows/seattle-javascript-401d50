import {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {

  let [people, setPeople] = useState([]);
  let [sortedPeople, setSorted] = useState([]);

  // useEffect(() => {
  //   addPerson('Jacob');
  //   addPerson('Adrian');
  // }, []);

  useEffect(() => {
    // array.sort
    // people.sort((a, b) => b - a);
    let unsorted = [...people];
    unsorted.sort((a, b) => {
      //compare the items, return -1 (anything lower than 0) if a goes before b, return 1(or anything greater than 0) if b comes before a, or 0 to not move them
      if (a > b) {
        return 1
      } else if (b > a) {
        return -1
      } else {
        return 0
      }
    });
    setSorted(unsorted);
    // console.log(sortedPeople);
  }, [people]);

  function addPerson(person) {
    // console.log(people,person);
    setPeople([...people, person]);
  }
  // console.log(people);
  return (
    <div className="App">
      <h1>Sorted People!</h1>
      <Form addPerson={addPerson}/>
      <List values={sortedPeople}/>
    </div>
  );
}

export default App;
