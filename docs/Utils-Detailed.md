# Utils

Methods
-------



`isUndefined`
-------------

Determines if the given value is undefined.

### Arguments

| argument name | type    | defaultValue | description                            |
|---------------|---------|--------------|----------------------------------------|
| value         | dynamic |              | The value to check if it is undefined. |

### Returns

*   boolean: True if the value is undefined, false otherwise.

<br />

`isSubType`
-----------

Determines if the given value is an instance of the given subType.

### Arguments

| argument name | type    | defaultValue | description                                                   |
|---------------|---------|--------------|---------------------------------------------------------------|
| value         | dynamic |              | The value to check if it is an instance of the given subType. |
| subType       | string  |              | The subType to check if the value is an instance of.          |

### Returns

*   boolean: True if the value is an instance of the given subType, false otherwise.

<br />


`isInvalid`
-----------

Determines if the given value is invalid.

### Arguments

| argument name | type    | defaultValue | description                          |
|---------------|---------|--------------|--------------------------------------|
| value         | dynamic |              | The value to check if it is invalid. |

### Returns

*   boolean: True if the value is invalid, false otherwise.

<br />


`isArray`
---------

Determines if the given value is an array.

### Arguments

| argument name | type    | defaultValue | description                           |
|---------------|---------|--------------|---------------------------------------|
| value         | dynamic |              | The value to check if it is an array. |

### Returns

*   boolean: True if the value is an array, false otherwise.

<br />


`isAACompatible`
----------------

Determines if the given value is an associative array.

### Arguments

| argument name | type    | defaultValue | description                                       |
|---------------|---------|--------------|---------------------------------------------------|
| value         | dynamic |              | The value to check if it is an associative array. |

### Returns

*   boolean: True if the value is an associative array, false otherwise.

<br />


`isString`
----------

Determines if the given value is a string.

### Arguments

| argument name | type    | defaultValue | description                           |
|---------------|---------|--------------|---------------------------------------|
| value         | dynamic |              | The value to check if it is a string. |

### Returns

*   boolean: True if the value is a string, false otherwise.

<br />


`isBoolean`
-----------

Determines if the given value is a boolean.

### Arguments

| argument name | type    | defaultValue | description                            |
|---------------|---------|--------------|----------------------------------------|
| value         | dynamic |              | The value to check if it is a boolean. |

### Returns

*   boolean: True if the value is a boolean, false otherwise.

<br />


`isFunction`
------------

Determines if the given value is a function.

### Arguments

| argument name | type    | defaultValue | description                             |
|---------------|---------|--------------|-----------------------------------------|
| value         | dynamic |              | The value to check if it is a function. |

### Returns

*   boolean: True if the value is a function, false otherwise.


<br />

`isInteger`
-----------

Determines if the given value is an integer.

### Arguments

| argument name | type    | defaultValue | description                             |
|---------------|---------|--------------|-----------------------------------------|
| value         | dynamic |              | The value to check if it is a function. |

### Returns

*   boolean: True if the value is a integer, false otherwise.

<br />


`isDouble`
----------

Determines if the given value is a double.

### Arguments

| argument name | type    | defaultValue | description                           |
|---------------|---------|--------------|---------------------------------------|
| value         | dynamic |              | The value to check if it is a double. |

### Returns

*   boolean: True if the value is a double, false otherwise.

<br />


`isNumber`
----------

Determines if the given value is a number (either an integer, float, or double).

### Arguments

| argument name | type    | defaultValue | description                           |
|---------------|---------|--------------|---------------------------------------|
| value         | dynamic |              | The value to check if it is a number. |

### Returns

*   boolean: True if the value is a number, false otherwise.

<br />


`isFloat`
---------

Determines if the given value is a float.

### Arguments

| argument name | type    | defaultValue | description                          |
|---------------|---------|--------------|--------------------------------------|
| value         | dynamic |              | The value to check if it is a float. |

### Returns
*   boolean: True if the value is a float, false otherwise.

<br />


`isPoint`
---------

Determines if the given value is a point (an array of length 2).

### Arguments

| argument name | type    | defaultValue | description                          |
|---------------|---------|--------------|--------------------------------------|
| value         | dynamic |              | The value to check if it is a point. |

### Returns

*   boolean: True if the value is a point, false otherwise.

<br />


`isRectangle`
-------------

Determines if the given value is a rectangle (an array of length 4).

### Arguments

| argument name | type    | defaultValue | description                              |
|---------------|---------|--------------|------------------------------------------|
| value         | dynamic |              | The value to check if it is a rectangle. |

### Returns

*   boolean: True if the value is a rectangle, false otherwise.

<br />


`isClass`
---------

Determines if the given value is a class (an associative array with a `__classname` string field).

### Arguments

| argument name | type    | defaultValue | description                          |
|---------------|---------|--------------|--------------------------------------|
| value         | dynamic |              | The value to check if it is a class. |

### Returns

*   boolean: True if the value is a class, false otherwise.

<br />

`isPointEqual`
--------------

Determines if the given points are equal (have the same x and y values).

### Arguments

| argument name | type    | defaultValue | description                  |
|---------------|---------|--------------|------------------------------|
| value         | dynamic |              | The first point to compare.  |
| otherValue    | dynamic |              | The second point to compare. |

### Returns

*   boolean: True if the points are equal, false otherwise.

<br />


`dv`
----

Gets a string representation of the given view (a `roSGNode` object).

### Arguments

| argument name | type    | defaultValue | description                                 |
|---------------|---------|--------------|---------------------------------------------|
| view          | dynamic |              | The view to get a string representation of. |

### Returns

*   string: A string representation of the view in the format [`subType.id`](http://subType.id). If the view is invalid, returns `#INVALID#`.


<br />


`callAAFunc`
------------

Calls the specified function on the given target object, with the given parameters.

### Arguments

| argument name | type     | defaultValue | description                                   |
|---------------|----------|--------------|-----------------------------------------------|
| target        | roSGnode |              | The object to call the function on.           |
| funcName      | string   |              | The name of the function to call.             |
| p1            | dynamic  | "#M\_NONE#"  | The first parameter to pass to the function.  |
| p2            | dynamic  | "#M\_NONE#"  | The second parameter to pass to the function. |
| p3            | dynamic  | "#M\_NONE#"  | The third parameter to pass to the function.  |

### Returns

*   dynamic: The return value of the function, or `invalid` if the function could not be called.

<br />


`apply`
-------

Calls the specified function with the given parameters, on the given target object if provided.

### Arguments

| argument name    | type               | defaultValue | description                                                                       |
|------------------|--------------------|--------------|-----------------------------------------------------------------------------------|
| func             | dynamic            |              | The function to call.                                                             |
| args             | roArray            | \[\]         | An array of arguments to pass to the function.                                    |
| target           | roAssociativeArray | invalid      | The object to call the function on.                                               |
| warnIfNoFunction | boolean            | true         | If true, logs an error if the target object does not have the specified function. |

### Returns

*   dynamic: The return value of the function, or `invalid` if the function could not be called.

<br />


`removeDuplicateKeys`
---------------------

Removes key/value pairs from an associative array that have the same key and value as another associative array.

### Arguments

| argument name | type               | defaultValue | description                                           |
|---------------|--------------------|--------------|-------------------------------------------------------|
| aa            | roAssociativeArray | invalid      | The associative array to remove key/value pairs from. |
| otherAA       | roAssociativeArray | invalid      | The other associative array to compare against.       |

### Returns

*   roAssociativeArray: The modified `aa` associative array, or the original `aa` if either `aa` or `otherAA` is invalid.



<br />

`getPath`
---------

Gets the value at the specified path in the given object.

### Arguments

| argument name   | type    | defaultValue | description                                                                 |
|-----------------|---------|--------------|-----------------------------------------------------------------------------|
| content         | object  |              | The object to get the value from.                                           |
| path            | string  | invalid      | The path to the value, in the form of "items.2.path.syntax".                |
| default         | dynamic | invalid      | The default value to return if the value at the specified path is invalid.  |
| disableIndexing | boolean | false        | If true, disables indexing of arrays and associative arrays using the path. |

### Returns

*   dynamic: The value at the specified path, or the default value if the value is invalid.

<br />

`getString`
-----------

Gets the string value at the specified path in the given object.

### Arguments

| argument name   | type    | defaultValue | description                                                                                |
|-----------------|---------|--------------|--------------------------------------------------------------------------------------------|
| content         | object  |              | The object to get the value from.                                                          |
| path            | string  | invalid      | The path to the value, in the form of "items.2.path.syntax".                               |
| default         | dynamic | ""           | The default value to return if the value at the specified path is invalid or not a string. |
| disableIndexing | boolean | false        | If true, disables indexing of arrays and associative arrays using the path.                |

### Returns

*   string: The string value at the specified path, or the default value if the value is invalid or not a string.

<br />

`getInteger`
------------

Gets the integer value at the specified path in the given object.

### Arguments

| argument name | type    | defaultValue | description                                                                                 |
|---------------|---------|--------------|---------------------------------------------------------------------------------------------|
| content       | object  |              | The object to get the value from.                                                           |
| path          | string  | invalid      | The path to the value, in the form of "items.2.path.syntax".                                |
| default       | dynamic | 0            | The default value to return if the value at the specified path is invalid or not an integer |

### Returns

*   integer: The integer value at the specified path, or the default value if the value is invalid or not a integer.

<br />

`getArray`
----------

Gets the array value at the specified path in the given object.

### Arguments

| argument name   | type    | defaultValue | description                                                                                |
|-----------------|---------|--------------|--------------------------------------------------------------------------------------------|
| content         | object  |              | The object to get the value from.                                                          |
| path            | string  | invalid      | The path to the value, in the form of "items.2.path.syntax".                               |
| default         | dynamic | \[\]         | The default value to return if the value at the specified path is invalid or not an array. |
| disableIndexing | boolean | false        | If true, disables indexing of arrays and associative arrays using the path.                |

### Returns

*   roArray: The array value at the specified path, or the default value if the value is invalid or not an array.

<br/>

`getAA`
-------

Gets the associative array value at the specified path in the given object.

### Arguments

| argument name   | type    | defaultValue | description                                                                                            |
|-----------------|---------|--------------|--------------------------------------------------------------------------------------------------------|
| content         | object  |              | The object to get the value from.                                                                      |
| path            | string  | invalid      | The path to the value, in the form of "items.2.path.syntax".                                           |
| default         | dynamic | {}           | The default value to return if the value at the specified path is invalid or not an associative array. |
| disableIndexing | boolean | false        | If true, disables indexing of arrays and associative arrays using the path.                            |

### Returns

*   roAssociativeArray: The associative array value at the specified path, or the default value

<br/>

`getFloat`
----------

Gets the float value at the specified path in the given object.

### Arguments

| argument name   | type    | defaultValue | description                                                                               |
|-----------------|---------|--------------|-------------------------------------------------------------------------------------------|
| content         | object  |              | The object to get the value from.                                                         |
| path            | string  | invalid      | The path to the value, in the form of "items.2.path.syntax".                              |
| default         | dynamic | 0.0          | The default value to return if the value at the specified path is invalid or not a float. |
| disableIndexing | boolean | false        | If true, disables indexing of arrays and associative arrays using the path.               |

### Returns

*   float: The float value at the specified path, or the default value if the value is invalid or not a float.

<br/>


`getBoolean`
------------

Gets the boolean value at the specified path in the given object.

### Arguments

| argument name   | type    | defaultValue | description                                                                                 |
|-----------------|---------|--------------|---------------------------------------------------------------------------------------------|
| content         | object  |              | The object to get the value from.                                                           |
| path            | string  | invalid      | The path to the value, in the form of "items.2.path.syntax".                                |
| default         | dynamic | false        | The default value to return if the value at the specified path is invalid or not a boolean. |
| disableIndexing | boolean | false        | If true, disables indexing of arrays and associative arrays using the path.                 |

### Returns

*   boolean: The boolean value at the specified path, or the default value if the value is invalid or not a boolean.


<br/>

`getPoint`
----------

This method retrieves a point value from the specified `content` object at the specified `path`, or returns the `default` value if no point value is found at the specified path. If `disableIndexing` is `true`, then the method will not treat `content` as an array and will instead treat it as a dictionary.

### Arguments

| argument name     | type      | default value | description                                                                                           |
|-------------------|-----------|---------------|-------------------------------------------------------------------------------------------------------|
| `content`         | `object`  |               | The object to retrieve the point value from.                                                          |
| `path`            | `string`  | `invalid`     | The path to the point value within `content`.                                                         |
| `default`         | `dynamic` | `[0, 0]`      | The default value to return if no point value is found at the specified path.                         |
| `disableIndexing` | `boolean` | `false`       | If `true`, the method will not treat `content` as an array and will instead treat it as a dictionary. |

### Returns

`dynamic` - The point value at the specified path within `content`, or the `default` value if no point value is found.

<br/>


`getNode`
---------

This method retrieves a `roSGNode` object from the specified `content` object at the specified `path`, or returns the `default` value if no `roSGNode` is found at the specified path. If `disableIndexing` is `true`, then the method will not treat `content` as an array and will instead treat it as a dictionary.

### Arguments

| argument name     | type      | default value | description                                                                                           |
|-------------------|-----------|---------------|-------------------------------------------------------------------------------------------------------|
| `content`         | `object`  |               | The object to retrieve the `roSGNode` from.                                                           |
| `path`            | `string`  | `invalid`     | The path to the `roSGNode` within `content`.                                                          |
| `default`         | `dynamic` | `invalid`     | The default value to return if no `roSGNode` is found at the specified path.                          |
| `disableIndexing` | `boolean` | `false`       | If `true`, the method will not treat `content` as an array and will instead treat it as a dictionary. |

### Returns

`dynamic` - The `roSGNode` object at the specified path within `content`, or the `default` value if no `roSGNode` is found.

<br/>

`getNumber`
-----------

This method retrieves a numeric value from the specified `content` object at the specified `path`, or returns the `default` value if no numeric value is found at the specified path. If `disableIndexing` is `true`, then the method will not treat `content` as an array and will instead treat it as a dictionary.

### Arguments

| argument name | type      | default value | description                                                                     |
|---------------|-----------|---------------|---------------------------------------------------------------------------------|
| `content`     | `object`  |               | The object to retrieve the numeric value from.                                  |
| `path`        | `string`  | `invalid`     | The path to the numeric value within `content`.                                 |
| `default`     | `dynamic` | `0`           | The default value to return if no numeric value is found at the specified path. |
| `disableIndexing` | `boolean` | `false` | If `true`, the method will not treat \` |

### Returns

*   dynamic: The numeric value at the specified path, or the default value if the value is invalid or not a number.

<br/>

`getAny`
--------

This method retrieves a value of any type from the specified `content` object at the specified `path`, or returns the `default` value if no value is found at the specified path. If `disableIndexing` is `true`, then the method will not treat `content` as an array and will instead treat it as a dictionary.

### Arguments

| argument name     | type      | default value | description                                                                                           |
|-------------------|-----------|---------------|-------------------------------------------------------------------------------------------------------|
| `content`         | `object`  |               | The object to retrieve the value from.                                                                |
| `path`            | `string`  | `invalid`     | The path to the value within `content`.                                                               |
| `default`         | `dynamic` | `invalid`     | The default value to return if no value is found at the specified path.                               |
| `disableIndexing` | `boolean` | `false`       | If `true`, the method will not treat `content` as an array and will instead treat it as a dictionary. |

### Returns

`dynamic` - The value at the specified path within `content`, or the `default` value if no value is found.

<br/>

`append`
--------

This method appends the values in the `other` associative array to the `source` associative array. If either `source` or `other` are not compatible with the associative array type, the method does nothing.

### Arguments

| argument name | type                 | default value | description                                                              |
|---------------|----------------------|---------------|--------------------------------------------------------------------------|
| `source`      | `roAssociativeArray` |               | The associative array to which the values from `other` will be appended. |
| `other`       | `roAssociativeArray` |               | The associative array whose values will be appended to `source`.         |

### Returns

`roAssociativeArray` - The modified `source` associative array with the values from `other` appended to it.

<br/>


`setPath`
---------

This method sets the value at the specified `path` within the `content` object to the specified `value`. If `insertAAsForMissingValues` is `true`, the method will insert empty associative arrays or arrays as needed to create the specified path within `content`. If `path` is `invalid`, the method does nothing.

### Arguments

| argument name               | type      | default value | description                                                                                                                   |
|-----------------------------|-----------|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| `content`                   | `dynamic` |               | The object in which the value at the specified path will be set.                                                              |
| `path`                      | `string`  |               | The path within `content` at which the value will be set.                                                                     |
| `value`                     | `dynamic` | `invalid`     | The value to set at the specified path within `content`.                                                                      |
| `insertAAsForMissingValues` | `boolean` | `true`        | If `true`, the method will insert empty associative arrays or arrays as needed to create the specified path within `content`. |

### Returns

`void` - This method does not return a value.

<br/>

`createPath`
------------

This method creates an associative array with a value at the specified `path`. If `insertAAsForMissingValues` is `true`, the method will insert empty associative arrays as needed to create the specified path within the returned associative array. If `path` is `invalid`, the method returns an empty associative array.

### Arguments

| argument name               | type      | default value | description                                                                                                                              |
|-----------------------------|-----------|---------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `path`                      | `string`  |               | The path within the returned associative array at which the value will be set.                                                           |
| `value`                     | `dynamic` | `invalid`     | The value to set at the specified path within the returned associative array.                                                            |
| `insertAAsForMissingValues` | `boolean` | `true`        | If `true`, the method will insert empty associative arrays as needed to create the specified path within the returned associative array. |

### Returns

`roAssociativeArray` - An associative array with a value at the specified `path`.

<br/>

`setOrAddNodeField`
-------------------

This method sets the value of the field with the specified `field` name within the `node` object to the specified `value`. If the `field` does not exist within `node`, it is added with the specified `value`. If `node` is not a valid `roSGNode` object or a compatible associative array, a warning message is logged.

### Arguments

| argument name | type       | default value | description                                                                               |
|---------------|------------|---------------|-------------------------------------------------------------------------------------------|
| `node`        | `roSGnode` |               | The `roSGNode` object or associative array in which the field value will be set or added. |
| `field`       | `string`   |               | The name of the field within `node` to set or add.                                        |
| `value`       | `dynamic`  | `invalid`     | The value to set for the field within `node`.                                             |

### Returns

`void` - This method does not return a value.


<br/>

`setNodeAAValue`
----------------

This method sets the value of the specified `key` within the field with the specified `field` name within the `node` object to the specified `value`. If the field does not exist within `node`, it is added with an empty associative array and the `key` is added to it with the specified `value`. If `node` is not a valid `roSGNode` object or a compatible associative array, a warning message is logged.

### Arguments

| argument name | type       | default value | description                                                                               |
|---------------|------------|---------------|-------------------------------------------------------------------------------------------|
| `node`        | `roSGnode` |               | The `roSGNode` object or associative array in which the field value will be set or added. |
| `field`       | `string`   |               | The name of the field within `node` to set or add.                                        |
| `key`         | `string`   |               | The key within the field to set or add.                                                   |
| `value`       | `dynamic`  | `invalid`     | The value to set for the key within the field within `node`.                              |

### Returns

`void` - This method does not return a value.

<br/>

`setNodeArrayValue`
-------------------

This method sets the value at the specified `index` within the field with the specified `field` name within the `node` object to the specified `value`. If the field does not exist within `node`, it is added with an empty array and the `value` is added to it at the specified `index`. If `node` is not a valid `roSGNode` object or a compatible associative array, a warning message is logged.

### Arguments

| argument name | type       | default value | description                                                                               |
|---------------|------------|---------------|-------------------------------------------------------------------------------------------|
| `node`        | `roSGnode` |               | The `roSGNode` object or associative array in which the field value will be set or added. |
| `field`       | `string`   |               | The name of the field within `node` to set or add.                                        |
| `index`       | `integer`  |               | The index within the field to set or add.                                                 |
| `value`       | `dynamic`  | `invalid`     | The value to set at the specified index within the field within `node`.                   |

### Returns

`void` - This method does not return a value.

<br/>

`setOrAddNodeFields`
--------------------

This method sets or adds the fields in the `fields` array to the `node` object with the corresponding values. If a field does not exist within `node`, it is added with the corresponding value. If `node` is not a valid `roSGNode` object or a compatible associative array, a warning message is logged.

### Arguments

| argument name | type       | default value | description                                                                          |
|---------------|------------|---------------|--------------------------------------------------------------------------------------|
| `node`        | `roSGnode` |               | The `roSGNode` object or associative array in which the fields will be set or added. |
| `fields`      | `roArray`  |               | The array of fields to be set or added to `node`, with their corresponding values.   |

### Returns

`void` - This method does not return a value.

<br/>

`strToBool`
-----------

This method converts the specified `s` string to a boolean value. If `s` is `invalid`, the method returns `false`. If `s` is the string "true", the method returns `true`, otherwise it returns `false`.

### Arguments

| argument name | type     | default value | description                                    |
|---------------|----------|---------------|------------------------------------------------|
| `s`           | `string` |               | The string to be converted to a boolean value. |

### Returns

`boolean` - The boolean value represented by the specified `s` string.

<br/>

`strToInt`
----------

This method converts the specified `s` string to an integer value. If `s` is `invalid`, the method returns `0`. Otherwise, the method returns the integer value represented by the string.

### Arguments

| argument name | type     | default value | description                                     |
|---------------|----------|---------------|-------------------------------------------------|
| `s`           | `string` |               | The string to be converted to an integer value. |

### Returns

`integer` - The integer value represented by the specified `s` string.

<br/>

`strToLong`
-----------

This method converts the specified `value` string to a long integer value. If `value` is not a string, the method returns `0`. Otherwise, the method returns the long integer value represented by the string.

### Arguments

| argument name | type     | default value | description                                         |
|---------------|----------|---------------|-----------------------------------------------------|
| `value`       | `string` |               | The string to be converted to a long integer value. |

### Returns

`dynamic` - The long integer value represented by the specified `value` string.

<br/>

`getIndexOfItem`
----------------

This method returns the index of the specified `item` within the children of the specified `parent` node. If `item` is not a child of `parent` or if `item` is `invalid`, the method returns `-1`.

### Arguments

| argument name | type       | default value | description                                                                  |
|---------------|------------|---------------|------------------------------------------------------------------------------|
| `parent`      | `roSGnode` |               | The parent node whose children will be searched for the specified `item`.    |
| `item`        | `roSGnode` |               | The child node whose index within the children of `parent` will be returned. |

### Returns

`integer` - The index of the specified `item` within the children of the specified `parent` node, or `-1` if `item` is not a child of `parent` or if `item` is `invalid`.

<br/>

`createSGNode`
--------------

This method creates a new `roSGNode` object of the specified `nodeType` and assigns the specified `id` to it. If the optional `parent` node is provided, the new node is appended to it as a child. If the optional `args` associative array or array of associative arrays is provided, the fields within it are applied to the new node on creation. If the `observe` field is present in `args`, the specified functions will be registered as observers for the corresponding fields of the new node. If the `isCallingInitialize` argument is `true` (default), the `_initialize()` method of the new node will be called.

### Arguments

| argument name         | type                              | default value | description                                                                                                                                                                                 |
|-----------------------|-----------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `nodeType`            | `string`                          |               | The type of the new `roSGNode` object to be created.                                                                                                                                        |
| `parent`              | `roSGnode`                        | `invalid`     | The optional parent node to which the new node will be appended as a child.                                                                                                                 |
| `id`                  | `string`                          | `invalid`     | The optional ID to be assigned to the new node. If not provided, a random integer ID will be generated.                                                                                     |
| `args`                | `roAssociativeArray` or `roArray` | `invalid`     | The optional associative array or array of associative arrays of fields to be applied to the new node on creation.                                                                          |
| `isCallingInitialize` | `boolean`                         | `true`        | A flag indicating whether the `_initialize()` method of the new node should be called.                                                                                                      |
| `mTarget`             | `roAssociativeArray`              | `invalid`     | The optional target object on which the observer functions specified in the `observe` field of `args` will be looked up. If not provided, the global `m` object will be used as the target. |



### Returns `roSGnode`

<br/>

`createNode`
------------

This method creates an object with the given `nodeType`.

### Arguments

| argument name | type   | defaultValue | description                   |
|---------------|--------|--------------|-------------------------------|
| nodeType      | string | N/A          | The type of object to create. |

### Returns

*   roSGnode: The newly created object.

<br/>

`getFunctionName`
-----------------

This method gets the name of a function as a string.

### Arguments

| argument name | type     | defaultValue | description                      |
|---------------|----------|--------------|----------------------------------|
| value         | function | N/A          | The function to get the name of. |

### Returns

*   dynamic: The name of the function as a string, or `invalid` if the provided value is not a function.

<br/>

`toggleObserver`
----------------

This method adds or removes an observer for a field on a given object. If `callbackName` is provided, the observer is added. If `callbackName` is not provided or is `invalid`, the observer is removed.

### Arguments

| argument name | type   | defaultValue | description                                                            |
|---------------|--------|--------------|------------------------------------------------------------------------|
| target        | object | N/A          | The object to add or remove an observer from.                          |
| field         | string | N/A          | The field to observe.                                                  |
| callbackName  | string | `invalid`    | The name of the callback function to be called when the field changes. |

### Returns

*   None.

<br/>

`clamp`
-------

This method clamps a number between a given range. If `wrap` is `true`, the number will wrap around the range if it is outside of it. If `wrap` is `false` or not provided, the number will be clamped to the range.

### Arguments

| argument name | type    | defaultValue | description                                                                        |
|---------------|---------|--------------|------------------------------------------------------------------------------------|
| number        | dynamic | N/A          | The number to clamp.                                                               |
| low           | dynamic | N/A          | The lower bound of the range.                                                      |
| high          | dynamic | N/A          | The upper bound of the range.                                                      |
| wrap          | boolean | `false`      | Determines whether the number should wrap around the range if it is outside of it. |

### Returns

*   dynamic: The clamped number.

<br/>

`getStackTrace`
---------------

This method gets a string representation of the current stack trace.

### Arguments

*   None.

### Returns

*   string: The stack trace as a string.

<br/>

`getTopM`
---------

This method gets the top level `m` object.

### Arguments

*   None.

### Returns

*   dynamic: The top level `m` object.

<br/>

`getMField`
-----------

This method gets a field of the top level `m` object.

### Arguments

| argument name | type   | defaultValue | description                   |
|---------------|--------|--------------|-------------------------------|
| fieldName     | string | N/A          | The name of the field to get. |

### Returns

*   dynamic: The value of the specified field.

<br/>

`getGlobal`
-----------

This method gets the `global` field of the top level `m` object.

### Arguments

*   None.

### Returns

*   dynamic: The `global` field of the top level \`

<br/>


`getTop`
--------

This method gets the top level node in the hierarchy.

### Arguments

*   None.

### Returns

*   roSGnode: The top level node in the hierarchy.

<br/>

`getScene`
----------

This method gets the current scene node in the hierarchy.

### Arguments

*   None.

### Returns

*   roSGnode: The current scene node in the hierarchy.

<br/>

`interpolateArray`
------------------

This method interpolates between two arrays of length 2.

### Arguments

| argument name | type    | defaultValue | description                                         |
|---------------|---------|--------------|-----------------------------------------------------|
| a             | roArray | N/A          | The first array to interpolate between.             |
| b             | roArray | N/A          | The second array to interpolate between.            |
| fraction      | float   | N/A          | The fraction to interpolate between the two arrays. |

### Returns

*   roArray: The interpolated array.

<br/>

`divideNumberToNearest`
-----------------------

This method divides a number by another number and rounds up if there is a remainder.

### Arguments

| argument name | type    | defaultValue | description              |
|---------------|---------|--------------|--------------------------|
| number        | integer | N/A          | The number to divide.    |
| toValue       | integer | N/A          | The number to divide by. |

### Returns

*   integer: The result of the division, rounded up if there is a remainder.