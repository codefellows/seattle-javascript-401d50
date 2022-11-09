# Class 38 - Asynchronous Redux Actions

## Warm Up

* Traverse A binary tree using depth first traversal and iteration.

## Code Review

* Add Products to Cart feature
  * Display Items in the shopping cart.
  * Decrement an item count from the redux store.
* Having trouble dispatching actions to update redux state.
  * State is being updated, but components using useSelector are not getting updated values.
  * Components should be able to always see the current state of the store.
    * Components can be off by one sometimes.
  * Something may be up with state (off by one).
    * Confirm that state is updating.

```js
function addToCart(payload) {
  return {
    type: "ADD_TO_CART",
    payload: payload
  }
}

const productState = [
  {
    name
    count
    description
    price
  }
]

function productReducer() {

}

const cartState = [];

function cartReducer() {

}

```

## Asynchronous Actions

* What is a Thunk

## DEMO: Redux Thunk
