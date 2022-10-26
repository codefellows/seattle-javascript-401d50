import React, {useState} from 'react';

import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

const Form = (props) => {
  // What values are important to store?
  // URL?
  // METHOD?
  let [method, setMethod] = useState('GET');
  let [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

  const handleSubmit = e => {
    e.preventDefault();

    // console.log(e.target, method, url);
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button data-testid="submit-btn" type="submit">GO!</button>
        </label>
        <label className="methods">
          {/* capture the value in state! */}
          <input
            type="radio"
            name="GET"
            id="get"
            data-testid="get"
            value="GET"
            onChange={(e) => {setMethod(e.target.value)}}
          />
          <input
            type="radio"
            name="POST"
            id="post"
            value="POST"
            onChange={(e) => { setMethod(e.target.value) }}
          />
          <input
            type="radio"
            name="PUT"
            id="put"
            value="PUT"
            onChange={(e) => { setMethod(e.target.value) }}
          />
          <input
            type="radio"
            name="DELETE"
            id="delete"
            value="DELETE"
            onChange={(e) => { setMethod(e.target.value) }}
          />
          {/* <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span> */}
        </label>
      </form>
    </>
  );
}

export default Form;
