# Registry

Class summary
-------------

This class provides methods for reading and writing to the system registry. The registry is a persistent data store that can be used to save application data across sessions.


<br />

## Methods

## `read`

Reads and deserializes the value of the specified registry key in the specified section.

### Arguments

| argument name | type | description |
| ---| ---| --- |
| \`sectionName\` | string | The name of the registry section where the key is located. |
| \`key\` | string | The name of the registry key whose value is to be read. |

### Returns

The deserialized value of the specified registry key, or `invalid` if the key does not exist or there was an error during deserialization.

<br />


## `write`
Writes and serializes the specified value to the specified registry key in the specified section.

### Arguments

| argument name | type | description |
| ---| ---| --- |
| sectionName | string | The name of the registry section where the key is located. |
| key | string | The name of the registry key whose value is to be written. |
| value | dynamic | The value to be written to the registry key. |

<br />


## `delete`
Deletes the specified registry key in the specified section.

#####

### Arguments

| argument name | type | description |
| ---| ---| --- |
| sectionName | string | The name of the registry section where the key is located. |
| key | string | The name of the registry key to be deleted. |

<br />

## `readAll`

Reads and deserializes all keys in the registry.

### Returns

An object containing the deserialized values of all registry keys, organized by section.

<br />

## `writeAll`
Writes and serializes all keys in the specified object to the registry.

### Arguments

| argument name | type | description |
| ---| ---| --- |
| data | object | An object containing the values to be written to the registry, organized by section. |

<br />

## `deleteAll`
Deletes all keys in the registry.

<br />

## `writeSerializable`
Serializes and writes the specified serializable object to the specified registry key in the specified section.

### Arguments

| argument name | type | description |
| ---| ---| --- |
| section | string | The name of the registry section where the key is located. |
| key | string | The name of the registry key whose value is to be written. |
| serializable | object | The serializable object to be written to the registry key. |

### Returns

`true` if the object was successfully serialized and written to the registry, `false` otherwise.

<br />



## `readSerializable`
Reads serialized data from a specified section and key in a storage medium, and deserializes it into a specified object or a new object.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `section` | str |  | The section in which to read the serialized data from. |
| `key` | str |  | The key for the serialized data to read. |
| `serializable` | object | `invalid` | The object to deserialize the data into. This must be a serializable object. If not provided or set to `invalid`, a new object will be created to hold the deserialized data. |

### Returns

*   (dynamic): The deserialized data, contained in the `serializable` object if provided, or in a new object if not. If the `serializable` object is not serializable, the function returns `False`.

