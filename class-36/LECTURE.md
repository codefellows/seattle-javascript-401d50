# Class 36 - Redux Library

## Announcements

* This week begins Whiteboard Finals!
  * Early Birds should expect to hear about Final Whiteboard.
  * The schedule is published for instructor (they will reach out and confirm).
  * I try very hard to give you 24 hours notice.
  * As early as Tomorrow afternoon (11/08), try and be prepared to interview.
* No class on Friday (Veterans Day).
* Career Coaching Workshop #6 is on Thursday.
  * Format is specified in the prep assignment (power point presentation).

## Warm Up

Programming Calisthenics:

* Traversing a Binary Tree using Breath-First ordering.
  * Suggest using a whiteboard to visualize and come up an algorithm.

```javascript

function breadthFirst(root) {
  /**
  * Use a queue to read all current level nodes.
  * While the queue is not empty:
    * dequeue the current node
    * if left node -> enqueue left node
    * if right node -> enqueue right node
  */
}

```

## Review

### Hooks

* What are Hooks?
  * Functions - sometimes they involve components.
    * hook into you app -> React application.
  * useState -> Managing instance of state directly.  We use a `getter` and `setter` to manage the values.
  * useEffect -> Used to "Hook into" a components lifecycle (componentDidMount, componentDidUpdate, etc).

  ```jsx
  <!-- subscribe to the componentDidMount "event" -->
  useEffect(() => {
    <!-- This only happened on componentDidMount -->
  }, [])

  useEffect(() => {
    <!-- This only happened when userName is changed -->
  }, [userName])
  ```

  * useContext -> Managing state on a more global level.
    * How do we use `useContext`?
      * First we create a context thing, pass that into the useContext hook.
      * Creating a consumer of global context things.
  * useReducer -> Groups instances together, to allow managing of a more complex state.
    * Uses a `reducer` function:  a function that changes `state` based on an `action`, returns a brand new state.

### Context

* More Global State values
* Create a Provider Component, whose `children` can opt into access to the provider values / behaviors.

## Global State with Redux

What is "global" application state?

* Application state -> values that persist for my Entire Web Application?

## Material UI

Leaving Blueprint for hopefully a better Component Framework -> Material UI.
