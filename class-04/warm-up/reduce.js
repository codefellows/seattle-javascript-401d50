'use strict';

/**
 * @param values [Array / Object]
 * @param callback [Function]
 * @param accumulator [Any (Number || Array)]
 * @returns accumulator
 */
function reduce(data, callback, acc) {

    if (Array.isArray(data)) {
        // let accumulator = acc;
        for (let i = 0; i < data.length; i++) {
            // set accumulator to be the of data[i] plus the accumulator
            // accumulator = callback(accumulator, data[i]);
            acc = callback(acc, data[i], i);
        }
        return acc;
    } else {
      let keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        acc = callback(acc, key, data[key]);
      }
      return acc;
    }
}
let sum = (acc, val) => {
    return acc + val;
}
module.exports = reduce;
