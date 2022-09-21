# Class 03 - SQL Databases and Sequelize

## Warm Up

```javascript

function filter (array, callback) {
  if (Array.isArray(array)) {
    let newArray = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i)) {
        newArray[j] = array[i];
        j++;
      }
    }
    return newArray;
  } else {
    let newObj = {};
    let keys = Object.keys(array);
    // loop through keys
    for (let i = 0; i < keys.length; i++) {
      // evaluate callback passing in key and value
      let key = keys[i];
      if (callback(key, array[key])) {
        // if truthy, create new key value pair in newObj
        newObj[key] = array[key];
      }
    }
    return newObj;
  }
}

```

## Review

* Error handling, 404s and 500 errors.
* Using a start function for listening, using the app "singleton" for testing.
* Testing logger, how do we test something that makes no changes or return values.
  * Jest Spy function.

## SQL Databases

## Sequelize (ORM)

## DEMO: TDD JavaScript SQL interface
