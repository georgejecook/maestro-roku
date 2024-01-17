# mc.utils.Serialization

This namespace provides utilities for serializing and deserializing objects.




<br />

## Functions


## `serialize`
The `serialize` function takes an object as input and returns an associative array representation of that object. If the object is a `roSGNode`, it calls the `serialize` method on the node to get its serialized representation. For other types of objects, the `serialize` method must be provided by the object itself.


### Arguments

| Argument Name  | Type     | Description                  |
|----------------|----------|------------------------------|
| `serializable` | `object` | The object to be serialized. |

### Returns

An associative array containing the serialized representation of the object.

<br/>

## `deSerialize`
The `deSerialize` function takes an associative array as input and returns an object created from the data in the array. If an optional object is provided, the function will deserialize the data into that object. If no object is provided, a new object will be created based on the data.

### Arguments

| Argument Name  | Type                 | Default Value | Description                                                                                                       |
|----------------|----------------------|---------------|-------------------------------------------------------------------------------------------------------------------|
| `data`         | `roAssociativeArray` | N/A           | The associative array containing the serialized representation of the object.                                     |
| `serializable` | `object`             | `invalid`     | An optional object to deserialize the data into. If not provided, a new object will be created based on the data. |

### Returns

The deserialized object.

<br/>

## `isSerializable`
This function returns a boolean indicating whether an object is serializable.

### Arguments

| Argument Name | Type     | Description                              |
|---------------|----------|------------------------------------------|
| `item`        | `object` | The object to check for serializability. |

### Returns

`true` if the object is serializable, `false` otherwise





