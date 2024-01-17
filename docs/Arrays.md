# Arrays

Class summary
-------------

This class represents an array data structure and provides various methods for manipulating and accessing its items. It also includes support for serialization and notifications of changes to the array. The array can store items of any type, including other nodes.


<br/>

Methods
-------

## `sortByKey`

This method sorts the items in the array by the value of a specified key in ascending or descending order.

### Arguments

| argument name | type      | defaultValue | description                                                                      |
|---------------|-----------|--------------|----------------------------------------------------------------------------------|
| `keyName`     | `string`  | None         | The name of the key to sort the array by.                                        |
| `ascending`   | `boolean` | `true`       | A boolean indicating whether to sort the array in ascending or descending order. |



<br />

## `clear`

This method clears the array, setting all items to be empty and the length of the array to be 0.

### Arguments

There are no arguments for this method.



<br />

## `peek`
This method returns the last item in the array without removing it.

### Arguments

There are no arguments for this method.

### Returns `dynamic`

<br />

## `push`
This method adds an item to the end of the array.

### Arguments

| argument name | type      | defaultValue | description                                   |
|---------------|-----------|--------------|-----------------------------------------------|
| `value`       | `dynamic` | None         | The item to be added to the end of the array. |



<br/>

## `set`
This method updates an item at a specific index in the array.

### Arguments

| argument name | type      | defaultValue | description                                        |
|---------------|-----------|--------------|----------------------------------------------------|
| `index`       | `integer` | None         | The index of the item to be updated.               |
| `value`       | `dynamic` | None         | The new value for the item at the specified index. |




<br />

## `insert`
This method inserts one or more items at a specific index in the array.

### Arguments

| argument name | type      | defaultValue | description                                                          |
|---------------|-----------|--------------|----------------------------------------------------------------------|
| `index`       | `integer` | None         | The index to insert the items at.                                    |
| `value`       | `dynamic` | None         | The items to be inserted. Can be a single item or an array of items. |



<br />

## `pop`
This method removes and returns the last item in the array.

### Arguments

There are no arguments for this method.



<br />


## `shift`
This method removes and returns the first item in the array.

### Arguments

There are no arguments for this method.

### Returns `dynamic`

<br />

## `unshift`
This method adds an item to the beginning of the array.

### Arguments

| argument name | type      | defaultValue | description                                         |
|---------------|-----------|--------------|-----------------------------------------------------|
| `value`       | `dynamic` | None         | The item to be added to the beginning of the array. |


<br />


## `append`
This method adds one or more items to the end of the array.

### Arguments

| argument name | type                 | defaultValue | description                                                                               |
|---------------|----------------------|--------------|-------------------------------------------------------------------------------------------|
| `other`       | `roAssociativeArray` | None         | The items to be added to the end of the array. Can be a single item or an array of items. |

<br />


## `get`
This method retrieves the item at a specific index in the array.

### Arguments

| argument name | type      | defaultValue | description                            |
|---------------|-----------|--------------|----------------------------------------|
| `index`       | `integer` | None         | The index of the item to be retrieved. |

### Returns `dynamic`

<br />

## `remove`
This method removes one or more items from the array starting at a specific index.

### Arguments

| argument name   | type      | defaultValue | description                                   |
|-----------------|-----------|--------------|-----------------------------------------------|
| `index`         | `integer` | None         | The index to start removing items from.       |
| `numberOfItems` | `integer` | `1`          | The number of items to remove from the array. |



<br />

## `hasItem`
This method returns a boolean indicating whether the specified value is present in the array.

### Arguments

| argument name | type      | defaultValue | description                                                                             |
|---------------|-----------|--------------|-----------------------------------------------------------------------------------------|
| `value`       | `dynamic` | None         | The value to search for in the array.                                                   |
| `key`         | `string`  | `invalid`    | The name of a key to use for searching for the value in an array of associative arrays. |


### Returns `boolean`

<br />

## `getValues`
This method returns the entire array.

### Arguments

There are no arguments for this method.

### Returns `array`

<br />

## `getIndex`
This method returns the index of the specified value in the array, or -1 if the value is not present in the array.

### Arguments

| argument name | type      | defaultValue | description                                                                             |
|---------------|-----------|--------------|-----------------------------------------------------------------------------------------|
| `value`       | `dynamic` | None         | The value to search for in the array.                                                   |
| `key`         | `string`  | `invalid`    | The name of a key to use for searching for the value in an array of associative arrays. |

### Returns `integer`

<br />

## `serialize`
This method returns a serialized version of the array as an associative array.

### Arguments
There are no arguments for this method.

### Returns `associative array`
<br />

## `deserialize`
This method takes in an associative array and updates the array with the items contained in the associative array.

### Arguments

| argument name | type                 | defaultValue | description                                                                     |
|---------------|----------------------|--------------|---------------------------------------------------------------------------------|
| `data`        | `roAssociativeArray` | None         | The associative array containing the items to be added or updated in the array. |


<br />

## `setNotificationsEnabled`
This method enables or disables notifications of changes to the array.

### Arguments

| argument name | type      | defaultValue | description                                                                              |
|---------------|-----------|--------------|------------------------------------------------------------------------------------------|
| `active`      | `boolean` | None         | A boolean indicating whether to enable or disable notifications of changes to the array. |

<br />

## `resetPendingChanges`
This method clears the list of pending changes to the array.

### Arguments

There are no arguments for this method.