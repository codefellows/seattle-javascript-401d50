# Warm Up

## `filter()` method

Input: 2 arguments: An array or object and a callback function.

Return: a new array or object matching the input, based on the return value of the callback function.

For Arrays, the input should be an array and a callback that receives `value` and `index` as parameters.

- Run the callback for each element in the array.
- Return a new array, containing only those elements for which the callback returned `true`.

```javascript
let array = [1,2,3,4];
filter(array, (val,idx) => {
  return !(value % 2)
});

// [2,4]
```

For Objects, the input should be an object and a callback that receives `key` and `value` as parameters.

- Run the callback for each property in the object.
- Return a new object, containing only those properties for which the callback returned `true`

```javascript
let obj = {
  hot: true
  sunny: false
};

filter(obj, (key, val) => {
  return val === true;
})

// { hot: true }
```
