# Career Coaching Workshop #6

* Presentation Day!

## Presentation Order

* Alfredo ✅
* Adrian ✅
* David T. ✅
* Brooke ✅
* Carlos ✅
* Rhea ✅
* Robert ✅
* Jackson ✅
* Jeffrey ✅
* David Suy ✅
* Jordan ✅
* Miguel ✅

## Redux Toolkit (2:00 PM Optional Lecture)

* Opinionated implementation of Redux.
* Guard Rails for creating and updating global state.

## Review

* Asynchronous Actions
  * What struggles did ya'll encounter?
    * Too busy with other features.
  * Implementing the Thunk was easy!
    * The currying is required for redux middleware.

```js
// in the middle -> between dispatch and the reducer
const reduxMiddleware = (store) => (next) => (action) => {
  // do middleware things here.
}

// why is the thunk necessary?  when we do something asynchronously we don't return an object right away.
const thunk = (store) => (next) => (action) => {
  // we delay the returning of action, until a promise "resolves" or provides the data need we,  and re-dispatch when we have the data.
  return typeof(action) === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
}

function asyncUpdate(payload) {
  return async function(dispatch, getState) {
    let currentState = getState();
    dispatch({
      type: 'UPDATE',
      payload: payload,
    });
  }
}

async function update(payload) {
  return {
    type: 'UPDATE',
    payload: payload,
  }
}

dispatch(asyncUpdate('value'));
```
