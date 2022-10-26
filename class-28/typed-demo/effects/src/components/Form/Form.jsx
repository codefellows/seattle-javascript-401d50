import { useState } from 'react';

function Form(props) {
  let [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addPerson(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button type="submit">Add Person</button>
    </form>
  )
}

export default Form;
