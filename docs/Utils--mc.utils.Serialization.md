# Overview

Maestro supports serialization apis to make it easy to write objects to registry, or to json for other purposes.

Objects that can be serialized are classes, or nodes, which implement the Serializable interface

## Implementing serialization

Your node or class must adhere to the Serializable interface

  - have isSerializable field set to true
  - have public functions (i.e. for nodes, a func interface) for:
    - public function serialize() as mc.types.assocarray - returns an aa of the values to serialize the node
    - public function deserialize(data as mc.types.assocarray) - takes the values in data, and assigns them to itself

## Serializing and Deserializing

### Using mc.utils.Serialization

#### Serializing

Objects are serialized with:

  `mc.utils.Serialization.serialize(serializable as object) as mc.types.assocarray`

Which returns an associative array, if successful, invalid otherwise
If the passed in object is a node, then the field `_serializationType` with the type of the node will be appended to the serialized data

#### Deserializing

Objects can be deserialized with:
`mc.utils.Serialization.deSerialize(data as mc.types.assocarray, serializable = invalid as object) as object`

note, one can pass in a target serializable object to serialize into. If an object is not passed in the function will assume that the serialize object is node, and will use the `data._serializationType` to create an instance of that node, and serialize it.

#### Checking if an object can be deserialized
`mc.utils.Serialization.isSerializable(item as object) as boolean`


### Using mc.Registry

You can easily work with serializable objects by using the registry functions:

 - `readSerializable(section as string, key as string, serializable as object) as boolean`
   - if the data was successfully read from the registry, returns the serialized object. A target serializable can be passed in to receive the data.
 - `writeSerializable(section as string, key as string, serializable as object) as boolean`
   - returns true if the object was successfully deserialized and written to the registry
