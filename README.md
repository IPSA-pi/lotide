# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ipsa/lotide`

**Require it:**

`const _ = require('@ipsa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes in 2 arrays as arguments and asserts if they are identical.
* `assertEqual`: takes in 2 values: actual and expected and asserts if they are equal.
* `assertObjectsEqual`: takes in 2 objects as arguments and asserts if they are equal
* `countLetters`: takes in a string and returns an object that counts the number of times a letter appears in the string.
* `countOnly`: takes in an array and an object that specifies which elements to count. The function returns an object with the count of the objects specified.
* `createIndexFile`: console.logs a string with all the files in the filesystem (in our case functions) exported as a module.
* `eqArrays`: takes in 2 arrays and returns true if they have equal values.
* `eqObjects`: takes in 2 objects and returns true if both objects have the same keys and values.
* `findKey`: takes in an object and callback and returns the first key that meets the criteria specified in callback.
* `findKeyByValue`: takes in an object and a value and returns the first key that corresponds to that value.
* `flatten`: takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `head`: takes in an array and returns the first element in the array.
* `letterPositions`: takes in a string and returns all indices of letter positions in the string.
* `map`: takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `middle`: takes in an array and returns middle most element of the array.
* `tail`: takes in an array and returns everything except the first element of the array.
* `takeUntil`: takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* `without`: takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.