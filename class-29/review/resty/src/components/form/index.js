import { useState } from "react";
import './form.scss';

/* TODO

  O <Form /> component
    O onSubmit() sends the user’s entries to the <App /> via method sent in through props

*/

function Form(props)
{
  let [ url, setUrl ] = useState('');
  // default method is GET
  let [ method, setMethod ] = useState('GET');

  // json input data for PUT and POST
  let [ body, setBody ] = useState('');

  function handleSubmit(e)
  {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: body,
    };
    console.log('formData: ', formData);
    props.handleRequestParams(formData);
  }

  async function handleMethod(e)
  {
    e.preventDefault();
    // update method in state onClick of button
    // update the input's type onClick
    let selectedMethod = e.target.id.toUpperCase();
    console.log('selected method: ', selectedMethod);
    await setMethod(selectedMethod);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label className="url">
        <span>URL: </span>
        <input
          name="url"
          as="text"
          onChange={ (e) => setUrl(e.target.value) }
          placeholder="API URL"
        />
        <button type="submit" className="button">GO!</button>
      </label>
      <label className="methods">
        <span id="GET" onClick={ handleMethod }>GET</span>
        <span id="POST" onClick={ handleMethod }>POST</span>
        <span id="PUT" onClick={ handleMethod }>PUT</span>
        <span id="DELETE" onClick={ handleMethod }>DELETE</span>
      </label>

      { method === 'PUT' || method === 'POST'
        ?
        <label className="jsonInput">
          <textarea
            name="jsonInput"
            placeholder="JSON data"
            onChange={ (e) => setBody(e.target.value) }>
          </textarea>
        </label>
        :
        undefined
      }
    </form>
  )
}

export default Form;
