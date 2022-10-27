# Class 29 - Reducers and useReducer Hook

## Warm Up

* Create a react component that makes a HTTP request on mount, using useEffect hook.
  * request: method -> GET. url -> https://pokeapi.co/api/v2/pokemon.
  * save the response to state.

```javascript

import axios from 'axios';

function App() {

  const [result, setResults] = useState('');

  async function callApi() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon');
    let json = await response.json();
    setResults(json);
  }

  useEffect(() => {
    callApi();
  }, []); // this only activates onMount.

  return (

  );
}


```

## Code Review

Overview of hooks. Hooks are functions.

* useState - replaces `this.state` and `this.setState`.
  * What is returned?  What are the arguments?
  * Return values: the `thing` or value and another function to change it!
  * Argument: initial value for state.

* useEffect - replaces all component lifecycle functions.
  * `componentDidMount() { doSomethingBeforeRender }` ->
  * `useEffect(() => doSomethingBeforeRender, [])`
  * What are the arguments for useEffect?
    1. Callback function that is run on updates to the listeners.
    2. listeners?  things to listen for -> state / values that React cares about (state / props)

* It's hard to know when useEffect functions are called.
  * Infinite Loop - subscribe to changes in the useEffect causes useEffect to run infinitely!
    * Where are we setting the data?

* today: useReducer - manage state objects.
  * gives us a functional way to mutate objects without side effects.
  * we've done this a little bit: Array.prototype.reduce.

## JS Reducers!

What is a reducer?

* A function that takes in 'state' and an 'action' as parameters, and return a brand new state object.
  * State - values that we care about (should be an object literal)
  * Action - object with a "type" -> string, and payload: any value.

```js

// reducer = (state, action) => new State;


const initialState = {
  messages: [],
  users: [],
}

const addMessage = (messageText) => {
  return {
    type: 'ADD_MESSAGE',
    payload: messageText,
  }
}

function reducer(state, action) {

  if (action.type == 'ADD_MESSAGE') {
    return {
      messages: [...state.messages, action.payload],
      users: [...state.users],
    }
  } else {
    return state;
  }
}

const updatedState = reducer(initialState, addMessage('Hello'));

console.log(initialState, updatedState);


```

## useReducer Hook

useReducer is a function that takes in and reducer function, and initial state object, and returns that current state, and a function that you can `dispatch` actions into.

```jsx

const reducer = (state, action) => {
  if (action.type == 'ADD_MESSAGE') {
    return {
      messages: [...state.messages, action.payload],
      users: [...state.users],
    }
  } else {
    return state;
  }
}

const initialState = {
  messages: [],
  users: [],
}

function App() {

  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <ul>
        {state.messages.map(message => <li>{message}</li>)}
      </ul>
      <form onSubmit={(e) => dispatch({type: 'ADD_MESSAGE', payload: e.target.text.value})}>
        <input name="text" type="text">
        <button type="submit">Add Message</button>
      </form>
    </div>
  )
}


```
