import React, { useState, useEffect } from "react";
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
//import axios from 'axios';


/* TODO

  O <App /> does a check on the request data from the form and
    O updates the request variable in state with the
      O url,
      O method, and
      O potentially the body

  O <App /> has an effect hook
    O that’s looking for changes to the request variable in state, and in response,
      X runs the API request with the new request options from state

  O <App /> updates state with the results of the API Request
*/


const App = () =>
{
  let [ data, setData ] = useState(null);

  let [ requestParams, setRequestParams ] = useState({});

  // subscribed to changes on requestParams
  useEffect(() =>
  {
    console.log('requestParams changed: ', requestParams);
    callApi();
    // return ()=>
    // {
    //   console.log('return from requestParams change');
    // }
  }, [ requestParams ]);

  const handleRequestParams = (formData) =>
  {
    // spread operator to trigger re-render with new object
    setRequestParams({ requestParams, ...formData })
    // callApi();
  }

  const callApi = () =>
  {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" }
      ]
    };
    // let results = fetch(`${requestParams.url}`)
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // using the spread operator to maintain any previous state values.
    setData({ data });
    console.log('called api with request params: ', requestParams);
  };
  console.log(data);
  return (
    <React.Fragment>
      <Header />

      <div>Request Method: { requestParams.method }</div>
      <div>URL: { requestParams.url }</div>
      <div>Body: { requestParams.body }</div>

      <Form
        handleRequestParams={ handleRequestParams }
      />

      <Results
        data={ data }
        displayValue={ "Loading..." }
      />

      <Footer />
    </React.Fragment>
  );
};

export default App;
