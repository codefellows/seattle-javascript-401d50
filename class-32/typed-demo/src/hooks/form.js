import { useState, useEffect } from 'react';

// make form logic generic so we can use it on any form.
const useForm = (callback, defaultValues={}) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(values);
  };

  const handleChange = (event) => {
    event.persist(); // specific to React, allows us to set state values.

    let { name, value } = event.target; // the input element, and the slider
    if (parseInt(value)) { // convert string with numeric characters to numbers, don't put numbers
      value = parseInt(value);
    }

    setValues(values => ({ ...values, [name]: value }));
  };

  useEffect( () => {
    setValues( defaultValues );
  }, [defaultValues]);

  // we are not returning JSX, instead we return functions and values.
  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
