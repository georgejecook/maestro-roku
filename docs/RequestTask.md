# RequestTask

Class summary
-------------

The `RequestTask` class is a task class in the `mc` namespace that is responsible for making HTTP requests to a specified URL. It has a single public method, `nodeRun`, which is the entry point for the task when it is executed. This method creates an instance of the `RequestTask` class and then calls the `execute` method on it, passing in the provided arguments.


<br/>

## Methods

## `nodeRun`
This method is the entry point for the task when it is executed. It creates an instance of the `RequestTask` class and then calls the `execute` method on it, passing in the provided `args` parameter.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| args | mc.types.assocarray |  | An associative array of arguments for the task. |

### Returns - `dynamic`

The return type of this method is `dynamic`, mc.net.NetResult or invalid

<br />

## `new`
This is the constructor for the `RequestTask` class. It does not have any arguments or return values.

### Arguments

`None`

### Returns

`None`

<br/>

Private methods
---------------

`execute`
-------

This method is responsible for making an HTTP request based on the provided `method` and other arguments. It uses the `makeRequest` function to create a request object and then calls the appropriate method on it (e.g. `get`, `post`, `put`, or `delete`) to execute the request.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| args | mc.types.assocarray |  | An associative array of arguments for the task. |

### Returns - `dynamic`

The return type of this method is `dynamic`, which means that it can return any type of value. It will return the result of the HTTP request, a `mc.net.NetResult`
, unless an unknown `method` is provided, in which case it will return the value `invalid`.