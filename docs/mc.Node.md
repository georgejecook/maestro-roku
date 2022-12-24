# mc.Node

Class summary
-------------

Mc.Node extends base roku Node component.



Functions
---------

`init`
------

Initializes the `mc_Node` object by setting the `log` field to a new instance of `log.Logger`, the `notifyChanges` field to `true`, the `pendingChanges` field to an empty array, and the `children` field to an empty array.

### Arguments

None

### Returns

None

`setField`
----------

Sets the value of a field in the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| name | string | N/A | The name of the field to set. |
| value | dynamic | N/A | The value to set the field to. |

### Returns

None

`getChildren`
-------------

Returns the `children` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| count | integer | \-1 | The maximum number of children to return. |
| start | integer | 0 | The index of the first child to return. |

### Returns

An array of `roSGNode` objects.

`getChild`
----------

Returns the child at a given index in the `children` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| index | integer | N/A | The index of the child to return. |

### Returns

An `roSGNode` object.

<br/>


`sortByKey`
-----------

Sorts the `children` field of the `mc_Node` object by the value of a given key, in ascending or descending order.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| keyName | string | N/A | The name of the key to sort by. |
| ascending | boolean | true | Whether to sort in ascending or descending order. |

### Returns

None

<br/>

`sortByCallFunc`
----------------

Sorts the `children` field of the `mc_Node` object by the return value of a given function, in ascending or descending order.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| functionName | string | N/A | The name of the function to sort by. |
| ascending | boolean | true | Whether to sort in ascending or descending order. |

### Returns

None

`clear`
-------

Clears the `children` field of the `mc_Node` object, setting it to an empty array and setting the `length` field to 0.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| args | dynamic | invalid | Additional arguments, unused in this function. |

### Returns

None

`peek`
------

Returns the last element in the `children` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| args | dynamic | invalid | Additional arguments, unused in this function. |

### Returns

An `roSGNode`



`appendChild`
-------------

Appends a given child object to the `children` field of the `mc_Node` object. If the child is not an `roSGNode` object, logs an error.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| child | object | N/A | The child object to append. |

### Returns

None

`replaceChild`
--------------

Replaces the child at a given index in the `children` field of the `mc_Node` object with a given child object. If the child is not an `roSGNode` object, logs an error.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| child | object | N/A | The child object to replace the existing child with. |
| index | integer | N/A | The index of the child to replace. |

### Returns

None



`replaceChild`
--------------

Replaces the child at a given index in the `children` field of the `mc_Node` object with a given child object. If the child is not an `roSGNode` object, logs an error.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| child | object | N/A | The child object to replace the existing child with. |
| index | integer | N/A | The index of the child to replace. |

### Returns

None

`insertChild`
-------------

Inserts a given child object into the `children` field of the `mc_Node` object at a given index. If the child is not an `roSGNode` object, logs an error.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| child | object | N/A | The child object to insert. |
| index | integer | N/A | The index to insert the child at. |

### Returns

None

`insertChildren`
----------------

Inserts an array of child objects into the `children` field of the `mc_Node` object at a given index. If any of the children are not `roSGNode` objects, logs an error.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| children | mc.types.array | N/A | The array of child objects to insert. |
| index | integer | N/A | The index to insert the children at. |

### Returns

None

`removeChildIndex`
------------------

Removes the child at a given index in the `children` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| index | integer | N/A | The index of the child to remove. |

### Returns

None

`appendChildren`
----------------

Appends an array of child objects to the `children` field of the `mc_Node` object. If any of the children are not `roSGNode` objects, logs an error.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| children | mc.types.array | N/A | The array of child objects to append. |

### Returns

None

`removeChildrenIndex`
---------------------

Removes a given number of children starting at a given index in the `children` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| numberOfItems | integer | N/A | The number of children to remove. |
| index | integer | N/A | The index of the first child to remove. |

### Returns

None

`removeChildren`
----------------

Removes an array of child objects from the `children` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| children | mc.types.array | N/A | The array of child objects to remove. |

### Returns

None

`removeChild`
-------------

Removes a given child object from the `children` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| child | mc.types.array | N/A | The child object to remove. |

### Returns

None

`hasItem`
---------

Returns whether the `children` field of the `mc_Node` object contains a given child object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| child | object | N/A | The child object to search for. |
| key | string | invalid | The name of the key to use for comparison. |

### Returns

A boolean value indicating whether the child object is present in the `children` field.

`getIndex`
----------

Returns the index of a given child object in the `children` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| child | object | N/A | The child object to search for. |
| key | string | invalid | The name of the key to use for comparison. |

### Returns

An integer representing the index of the child object, or -1 if the object is not present in the `children` field.

`insertItems`
-------------

Inserts an array of objects into the `children` field of the `mc_Node` object at a given index. If any of the objects are not `roSGNode` objects, logs an error.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| index | integer | N/A | The index to insert the objects at. |
| value | dynamic | N/A | The array of objects to insert. |

### Returns

None

<br/>

`createChild`
-----------

This method creates a new child node in the current node with the specified nodeType and id. If no id is provided, a random id is generated. The method appends the new child node to the current node if it is successfully created.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| nodeType | string |  | The type of the node to be created |
| id | string | "" | The id of the node to be created. If not provided, a random id is generated. |

### Returns

The created child node, or invalid if the creation failed.

<br/>

`createChildren`
--------------

This method creates a specified number of child nodes with the given subtype in the current node.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| numChildren | integer |  | The number of child nodes to be created |
| subtype | string |  | The subtype of the child nodes to be created |

### Returns

An array of the created child nodes.

<br/>


`getChildCount`
-------------

This method returns the number of child nodes in the current node.

### Arguments

None.

### Returns

The number of child nodes in the current node.

</br>

`notifyUpdate`
--------------

Enables notifications and sends an update notification if notifications were previously disabled.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| args | dynamic | invalid | Additional arguments to pass to the update notification. |

### Returns

None

`resetChanges`
--------------

Resets the `pendingChanges` field and optionally the `changes` field of the `mc_Node` object.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| resetAll | boolean | true | A boolean value indicating whether to reset the `changes` field as well. |

### Returns

None



---

`addChanges`
------------

Adds an array of changes to the `changes` field of the `mc_Node` object, or to the `pendingChanges` field if notifications are currently disabled.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| changes | mc.types.array | N/A | The array of changes to add. |

### Returns

None

`setNotificationsEnabled`
-------------------------

Enables or disables notifications and sends an update notification if requested.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| active | boolean | N/A | A boolean value indicating whether to enable or disable notifications. |
| sendUpdatedChange | boolean | false | A boolean value indicating whether to send an update notification. |

### Returns

None

<br/>


`serialize`
-----------

Returns a serialized version of the `mc_Node` object. If the `serialize` field is set, returns the result of calling that function. Otherwise, returns an empty associative array.

### Arguments

None

### Returns

An associative array representing the serialized `mc_Node` object.



<br />

`deserialize`
------------------

Deserializes the `mc_Node` object using the provided data. If the `deserialize` field is set, calls that function with the provided data.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| data | mc.types.assocarray | N/A | The data to use for deserialization. |

### Returns

None
