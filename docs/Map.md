# Map

Class summary
-------------

The `MapClass` is a class that provides a simple map data structure to store and retrieve key-value pairs. It has methods for adding and updating key-value pairs, removing key-value pairs, checking if a key exists in the map, and retrieving the entire map or individual keys and values. The map also has the ability to be serialized and deserialized.


<br />

Methods
-------

## `clear`
This method clears the map, setting all key-value pairs to be empty and the length of the map to be 0.

### Arguments

There are no arguments for this method.

## `remove`
This method removes a key-value pair from the map, given a key.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `key` | `string` | None | The key of the key-value pair to be removed from the map. |

<br/>


## `set`
This method adds or updates a key-value pair in the map.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `key` | `string` | None | The key of the key-value pair to be added or updated in the map. |
| `value` | `dynamic` | None | The value of the key-value pair to be added or updated in the map. |


<br/>

## `append`
This method adds all key-value pairs from another map or an associative array to the current map.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `other` | `dynamic` | None | A map object or an associative array containing the key-value pairs to be added to the current map. |

<br/>

## `get`
This method retrieves the value of a key-value pair from the map, given a key.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `key` | `string` | None | The key of the key-value pair to retrieve the value for. |

### Returns `dynamic`


<br/>

`hasKey`
This method returns a boolean indicating whether the map has a key-value pair with the given key.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `key` | `string` | None | The key to check for in the map. |

### Returns `boolean`



## `getAA`
This method returns the entire map as an associative array.

### Arguments

There are no arguments for this method.

### Returns `associative array`

<br/>


## `getValues`
This method returns an array of all the values in the map.

### Arguments

There are no arguments for this method.

### Returns `array`

<br/>


## `getKeys`
This method returns an array of all the keys in the map.

### Arguments

There are no arguments for this method.

### Returns `array`

<br/>

## `serialize`
This method returns a serialized version of the map as an associative array.

### Arguments

There are no arguments for this method.

### Returns `serialized version of the map - associative array`

<br/>

## `deserialize`
This method takes in an associative array and updates the map with the key-value pairs contained in the associative array.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `data` | `mc.types.assocarray` | None | The associative array containing the key-value pairs to be added or updated in the map. |