import { Button, Slider, Card, Classes, Label } from "@blueprintjs/core";

import { useState } from 'react';
// import {useForm} from '../../hooks';


function AddTodoForm({addItem, defaultValues}) {
  // const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  const localDefaultValues = {
    text: '',
    assignee: '',
    difficulty: 1
  }
  const [values, setValues] = useState({ ...localDefaultValues, ...defaultValues });

  const handleSubmit = (event) => { 
    event.preventDefault();
    addItem(values);
    setValues({ ...localDefaultValues, ...defaultValues });
  }
  
  const handleChange = (event) => { 
    event.preventDefault && event.preventDefault();
    let { name, value } = event.target;
    if (parseInt(value)) {
      value = parseInt(value);
    }
    setValues(values => ({ ...values, [name]: value }));
  }

  return ( 
    <Card>
      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <Label>
          <span>To Do Item</span>
          <input data-testid="item-details-input" className={ Classes.INPUT } value={values.text} onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </Label>

        <Label>
          <span>Assigned To</span>
        <input data-testid="assigned-to-input" className={ Classes.INPUT } value={values.assignee} onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </Label>

        <Label>
          <span>Difficulty</span>
        <Slider onChange={(value) => handleChange({ target: {name: 'difficulty', value} })} initialValue={values.difficulty} min={1} max={5} name="difficulty" />
        </Label>

        <Label>
          <Button data-testid="submit-button" type="submit" text="Add Item"/>
        </Label>
      </form>
    </Card>
   );
}

export default AddTodoForm;