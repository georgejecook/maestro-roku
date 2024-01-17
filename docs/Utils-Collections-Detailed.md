# Collections

Class summary
-------------



Mc.collections namespace provides utility functions for arrays and associative arrays



Methods
-------



`forEach`
---------

Iterates over a collection and runs a provided function on each item in the collection.

### Arguments

| argument name | type               | defaultValue | description                                                                                                                                                     |
|---------------|--------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `collection`  | dynamic            | \-           | The collection to iterate over. Can be an array or a dictionary.                                                                                                |
| `func`        | function           | \-           | The function to run on each item. For an array, the function should have the form `function(item)`, for a dictionary the form should be `function(key, value)`. |
| `mTarget`     | roAssociativeArray | `invalid`    | The component scope to inject. If not provided, the current component scope will be used.                                                                       |

### Returns `array`
---------------

  <br/>


`map`
-----

Creates a new array with the results of calling a provided function on every element in the input array.

### Arguments

| argument name | type                      | defaultValue | description                                                                                                                                                                                                                   |
|---------------|---------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `array`       | roArray                   | \-           | The array of items to map.                                                                                                                                                                                                    |
| `mapper`      | mc.collections.BaseMapper | \-           | The mapper to use for transformation. Can be a function with the form `(transform):outputType`, a class with a `transform(item):outputType` function, or an instance of a class with a `transform(item):outputType` function. |
| `mTarget`     | roAssociativeArray        | `invalid`    | The component scope to inject. If not provided, the current component scope will be used.                                                                                                                                     |

### Returns `array`
---------------

  <br/>

`getSortedArrayByKey`
---------------------

Sorts an array of items based on the unique value at a specified key path.

### Arguments

| argument name | type    | defaultValue | description                                              |
|---------------|---------|--------------|----------------------------------------------------------|
| `arr`         | roArray | \-           | The array to sort.                                       |
| `keyPath`     | string  | \-           | The path to the value to sort on.                        |
| `ascending`   | boolean | `true`       | A boolean indicating whether to sort in ascending order. |

### Returns `array`
---------------

  <br/>



`getSortedArrayByFunction`
--------------------------

Sorts an array of items based on the result of calling a provided function on each item in the array.

### Arguments

| argument name | type               | defaultValue | description                                                                                              |
|---------------|--------------------|--------------|----------------------------------------------------------------------------------------------------------|
| `arr`         | roArray            | \-           | The array to sort.                                                                                       |
| `func`        | function           | \-           | The function to use for sorting. The function should have the form `function(item)` and return a string. |
| `ascending`   | boolean            | `true`       | A boolean indicating whether to sort in ascending order.                                                 |
| `mTarget`     | roAssociativeArray | `invalid`    | The component scope to inject. If not provided, the current component scope will be used.                |

### Returns `array`
---------------

  <br/>


`getSortedArrayByCallFunc`
--------------------------

Sorts an array of items based on the result of calling a specified function on each item in the array.

### Arguments

| argument name | type    | defaultValue | description                                                                                      |
|---------------|---------|--------------|--------------------------------------------------------------------------------------------------|
| `arr`         | roArray | \-           | The array to sort.                                                                               |
| `funcName`    | string  | \-           | The name of the function to call on each item in the array. The function should return a string. |
| `ascending`   | boolean | `true`       | A boolean indicating whether to sort in ascending order.                                         |

### Returns `array`
---------------



  <br/>


`getItemAtOffset`
-----------------

Returns the item in an array at a specified offset from a given item.

### Arguments

| argument name | type    | defaultValue | description                                                                                                                             |
|---------------|---------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `array`       | roArray | \-           | The array to search.                                                                                                                    |
| `item`        | dynamic | \-           | The item to search for.                                                                                                                 |
| `offset`      | integer | \-           | The offset from the given item to return.                                                                                               |
| `key`         | string  | `invalid`    | An optional key to use for searching for the item in the array.                                                                         |
| `wrap`        | boolean | `false`      | A boolean indicating whether to wrap around to the beginning of the array if the offset would take the index past the end of the array. |

### Returns `dynamic`
-----------------

  <br/>

`getArrayIndex`
---------------

Returns the index of a given item in an array.

### Arguments

| argument name | type    | defaultValue | description                                                     |
|---------------|---------|--------------|-----------------------------------------------------------------|
| `array`       | roArray | \-           | The array to search.                                            |
| `item`        | dynamic | \-           | The item to search for.                                         |
| `key`         | string  | `invalid`    | An optional key to use for searching for the item in the array. |

### Returns `integer`
-----------------

  <br/>



`filter`
--------

Creates a new array with all items that pass the test implemented by the provided function.

### Arguments

| argument name | type               | defaultValue | description                                                                                                                                                                                      |
|---------------|--------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `array`       | roArray            | \-           | The array of items to filter.                                                                                                                                                                    |
| `predicate`   | dynamic            | \-           | The predicate to use for filtering. Can be a function with the form `(item):bool`, a class with a `isMatch(item):bool` function, or an instance of a class with a `isMatch(item):bool` function. |
| `findAll`     | boolean            | `true`       | A boolean indicating whether to return all matching items or just the first.                                                                                                                     |
| `mTarget`     | roAssociativeArray | `invalid`    | The component scope to inject. If not provided, the current component scope will be used.                                                                                                        |

### Returns `array`
---------------




<br/>

`find`
------

Returns the first item in an array that matches a provided predicate.

### Arguments

| argument name | type               | defaultValue | description                                                                                                                            |
|---------------|--------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `array`       | roArray            | \-           | The array of items to search.                                                                                                          |
| `predicate`   | dynamic            | \-           | The predicate to use for searching. Can be a function with the form `(item):bool`, a class with a `isMatch(item):bool` function, or an |
| `default`     | dynamic            | `invalid`    | The default value to return if no matching item is found.                                                                              |
| `mTarget`     | roAssociativeArray | `invalid`    | The component scope to inject. If not provided, the current component scope will be used.                                              |

### Returns `dynamic`
-----------------

<br/>

`contains`
----------

Returns a boolean indicating whether an array contains an item that matches a provided predicate.

### Arguments

| argument name | type               | defaultValue | description                                                                                                                                                                                      |
|---------------|--------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `array`       | roArray            | \-           | The array of items to search.                                                                                                                                                                    |
| `predicate`   | dynamic            | \-           | The predicate to use for searching. Can be a function with the form `(item):bool`, a class with a `isMatch(item):bool` function, or an instance of a class with a `isMatch(item):bool` function. |
| `mTarget`     | roAssociativeArray | `invalid`    | The component scope to inject. If not provided, the current component scope will be used.                                                                                                        |

### Returns `boolean`
-----------------

<br/>

`arrayContains`
---------------

A function that returns a boolean indicating whether the provided array contains the provided value.

### Arguments

| argument name | type    | defaultValue | description                           |
|---------------|---------|--------------|---------------------------------------|
| `array`       | roArray | N/A          | The array to check for the value.     |
| `value`       | dynamic | N/A          | The value to search for in the array. |

### Returns `boolean`

<br/>

Mappers
-------



`BaseMapper`
------------

An abstract class that defines the `transform` function that should be implemented by its derived classes.

### Methods

| method name       | description                                                      |
|-------------------|------------------------------------------------------------------|
| `transform(item)` | A function that takes in an item and returns a transformed item. |


---

<br/>


`CallFuncMapper`
----------------

A class that derives from `BaseMapper` and implements the `transform` function by calling a function on the provided item using the `callFunc` method.

### Constructor

| argument name | type               | defaultValue | description                                                |
|---------------|--------------------|--------------|------------------------------------------------------------|
| `funcName`    | string             | N/A          | The name of the function to call on the item.              |
| `args`        | roAssociativeArray | N/A          | An associative array of arguments to pass to the function. |

### Methods

| method name       | description                                                                                                                        |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `transform(item)` | A function that takes in an item and returns the result of calling the specified function on the item with the provided arguments. |



---

<br/>


`FuncMapper`
------------

A class that derives from `BaseMapper` and implements the `transform` function by calling a function on the provided item.

### Constructor

| argument name | type   | defaultValue | description                                   |
|---------------|--------|--------------|-----------------------------------------------|
| `funcName`    | string | N/A          | The name of the function to call on the item. |

### Methods

| method name       | description                                                                                            |
|-------------------|--------------------------------------------------------------------------------------------------------|
| `transform(item)` | A function that takes in an item and returns the result of calling the specified function on the item. |



---

<br/>


`FieldMapper`
-------------

A class that derives from `BaseMapper` and implements the `transform` function by returning the value of a field on the provided item.

### Constructor

| argument name | type   | defaultValue | description                                   |
|---------------|--------|--------------|-----------------------------------------------|
| `fieldName`   | string | N/A          | The name of the field to return the value of. |

### Methods

| method name       | description                                                                                |
|-------------------|--------------------------------------------------------------------------------------------|
| `transform(item)` | A function that takes in an item and returns the value of the specified field on the item. |

<br/>


## Predicates classes
------------------

`AbstractPredicate`
-------------------

An abstract class that represents a predicate that can be used to filter items in an array.

### Properties

| property name | type    | description                           |
|---------------|---------|---------------------------------------|
| `expected`    | dynamic | The expected value for the predicate. |

### Methods

| method name | return type | description                                                                                                        |
|-------------|-------------|--------------------------------------------------------------------------------------------------------------------|
| `isMatch`   | boolean     | A method that returns a boolean indicating whether the provided item matches the expected value for the predicate. |

### Constructor

| argument name | type    | defaultValue | description                           |
|---------------|---------|--------------|---------------------------------------|
| `expected`    | dynamic | N/A          | The expected value for the predicate. |



---

<br/>

`ValuePredicate`
----------------

A class that represents a predicate that filters items by matching their value.

### Properties

| property name | type    | description                           |
|---------------|---------|---------------------------------------|
| `expected`    | dynamic | The expected value for the predicate. |

### Methods

| method name | return type | description                                                                                                        |
|-------------|-------------|--------------------------------------------------------------------------------------------------------------------|
| `isMatch`   | boolean     | A method that returns a boolean indicating whether the provided item matches the expected value for the predicate. |

### Constructor

| argument name | type    | defaultValue | description                           |
|---------------|---------|--------------|---------------------------------------|
| `expected`    | dynamic | N/A          | The expected value for the predicate. |

---

<br/>

`FieldPredicate`
----------------

A class that represents a predicate that filters items by matching the value of a specific field.

### Properties

| property name          | type    | description                                |
|------------------------|---------|--------------------------------------------|
| `expected`<br><br><br> | dynamic | The expected value for the predicate.      |
| `fieldName`            | string  | The name of the field to use for matching. |

### Methods

| method name | return type | description                                                                                                        |
|-------------|-------------|--------------------------------------------------------------------------------------------------------------------|
| `isMatch`   | boolean     | A method that returns a boolean indicating whether the provided item matches the expected value for the predicate. |

### Constructor

| argument name | type    | defaultValue | description                                |
|---------------|---------|--------------|--------------------------------------------|
| `fieldName`   | string  | N/A          | The name of the field to use for matching. |
| `expected`    | dynamic | N/A          | The expected value for the predicate.      |

---

<br/>

`FuncPredicate`
---------------

A class that represents a predicate that filters items by matching the value returned by a specific function.

### Properties

| property name | type    | description                                   |
|---------------|---------|-----------------------------------------------|
| `expected`    | dynamic | The expected value for the predicate.         |
| `funcName`    | string  | The name of the function to call on the item. |

### Methods

| method name | return type | description                                                                                                        |
|-------------|-------------|--------------------------------------------------------------------------------------------------------------------|
| `isMatch`   | boolean     | A method that returns a boolean indicating whether the provided item matches the expected value for the predicate. |

### Constructor

| argument name | type    | defaultValue | description                                   |
|---------------|---------|--------------|-----------------------------------------------|
| `funcName`    | string  | N/A          | The name of the function to call on the item. |
| `expected`    | dynamic | N/A          | The expected value for the predicate.         |

---

<br/>

`CallFuncPredicate`
-------------------

A class that represents a predicate that filters items by calling a specific function on them with provided arguments and matching the return value.

### Properties

| property name | type    | description                           |
|---------------|---------|---------------------------------------|
| `expected`    | dynamic | The expected value for the predicate. |
| `funcName`    | string  | The name of the function to call      |

### Constructor

| argument name | type               | defaultValue | description                                                |
|---------------|--------------------|--------------|------------------------------------------------------------|
| `funcName`    | string             | N/A          | The name of the function to use for matching.              |
| `args`        | roAssociativeArray | N/A          | An associative array of arguments to pass to the function. |
| `expected`    | dynamic            | N/A          | The expected value for the predicate.                      |

### Methods

| method name | return type | description                                                                                                        |
|-------------|-------------|--------------------------------------------------------------------------------------------------------------------|
| `isMatch`   | boolean     | A method that returns a boolean indicating whether the provided item matches the expected value for the predicate. |


