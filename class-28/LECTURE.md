# Class 28 - Component LifeCycle and `useEffect` Hook

## Code Review

How is RESTy going?
* Deployment issues:
  * file system on our Operating vs github
    * mac-OS doesn't care about capital letters but git and github do!
* React yml file:
  * If you want - it's worth deploying to multiple deployment platforms (github pages and Netlify)
    1. build our UI - `npm run build`. Creates a build directory with all our static files.
    2. Use the `gh-pages` node module to
       * Creates a branch called `gh-pages` on github.
       * deploys all the built code to the `gh-pages` branch.
* Netlify giving UI feedback errors while successfully deploying!
* EC2 deployments may be running from last week / 2 weeks, check one those and remove if necessary.
* Stateful functional component!
  * syntax is a little different
    * before:

```js
this.state = {
  key1: 'value1',
  key2: 'value2'
}
```

```js
// keeping track of more things!!  But gives us more control.
let [key1, setKey1] = useState('value1');
let [key2, setKey2] = useState('value2');
```

Thank you Jordan for your code!

## React Component LifeCycle

## useEffect for managing "Effects"
