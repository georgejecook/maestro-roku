# Requests

Class summary
-------------

This class handles network requests



Methods
-------

## `get`
Performs a GET request to the specified `url` with the optional `params` and `headers` passed as associative arrays, and any additional `otherArgs` passed as an associative array. Returns a `NetResult` object.

### Arguments

| Argument    | Type                 | Default Value | Description                                                                         |
|-------------|----------------------|---------------|-------------------------------------------------------------------------------------|
| `url`       | `string`             |               | The URL to make the GET request to.                                                 |
| `params`    | `roAssociativeArray` | `invalid`     | An optional associative array of query string parameters to include in the request. |
| `headers`   | `roAssociativeArray` | `invalid`     | An optional associative array of HTTP headers to include in the request.            |
| `otherArgs` | `roAssociativeArray` | `invalid`     | An optional associative array of additional arguments to pass to the request.       |

### Returns `NetResult`

<br/>

## `post`
Performs a POST request to the specified `url` with the optional `params` and `headers` passed as associative arrays, and any additional `otherArgs` passed as an associative array. Returns a `NetResult` object.

### Arguments

| Argument    | Type                 | Default Value | Description                                                                   |
|-------------|----------------------|---------------|-------------------------------------------------------------------------------|
| `url`       | `string`             |               | The URL to make the POST request to.                                          |
| `params`    | `roAssociativeArray` | `invalid`     | An optional associative array of data to include in the request body.         |
| `headers`   | `roAssociativeArray` | `invalid`     | An optional associative array of HTTP headers to include in the request.      |
| `otherArgs` | `roAssociativeArray` | `invalid`     | An optional associative array of additional arguments to pass to the request. |

### Returns `NetResult`

<br/>

## `delete`
Performs a DELETE request to the specified `url` with the optional `params` and `headers` passed as associative arrays, and any additional `otherArgs` passed as an associative array. Returns a `NetResult` object.

### Arguments

| Argument    | Type                 | Default Value | Description                                                                   |
|-------------|----------------------|---------------|-------------------------------------------------------------------------------|
| `url`       | `string`             |               | The URL to make the POST request to.                                          |
| `params`    | `roAssociativeArray` | `invalid`     | An optional associative array of data to include in the request body.         |
| `headers`   | `roAssociativeArray` | `invalid`     | An optional associative array of HTTP headers to include in the request.      |
| `otherArgs` | `roAssociativeArray` | `invalid`     | An optional associative array of additional arguments to pass to the request. |

### Returns `NetResult`

<br/>

`put`
Performs a PUT request to the specified `url` with the optional `params` and `headers` passed as associative arrays, and any additional `otherArgs` passed as an associative array. Returns a `NetResult` object.

### Arguments

| Argument    | Type                 | Default Value | Description                                                                   |
|-------------|----------------------|---------------|-------------------------------------------------------------------------------|
| `url`       | `string`             |               | The URL to make the PUT request to.                                           |
| `params`    | `roAssociativeArray` | `invalid`     | An optional associative array of data to include in the request body.         |
| `headers`   | `roAssociativeArray` | `invalid`     | An optional associative array of HTTP headers to include in the request.      |
| `otherArgs` | `roAssociativeArray` | `invalid`     | An optional associative array of additional arguments to pass to the request. |

### Returns `NetResult`

<br/>

## `executeRequest`
Performs an HTTP request of the specified `method` to the specified `url` with the optional `params` and `headers` passed as associative arrays, and any additional `otherArgs` passed as an associative array. Returns a `NetResult` object.

### Arguments

| Argument    | Type                 | Default Value | Description                                                                                                               |
|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------------------------|
| `method`    | `string`             |               | The HTTP method to use for the request (e.g. "GET", "POST", "DELETE", "PUT").                                             |
| `url`       | `string`             |               | The URL to make the request to.                                                                                           |
| `params`    | `roAssociativeArray` | `invalid`     | An optional associative array of query string parameters or data to include in the request, depending on the HTTP method. |
| `headers`   | `roAssociativeArray` | `invalid`     | An optional associative array of HTTP headers to include in the request.                                                  |
| `otherArgs` | `roAssociativeArray` | `invalid`     | An optional associative array of additional arguments to pass to the request.                                             |

### Returns `NetResult object`

<br/>

## `logAsCurl`
Logs the specified HTTP `method`, `url`, `headers`, and `data` as a cURL command. Returns the cURL command as a string.

### Arguments

| Argument  | Type                 | Default Value | Description                                                                   |
|-----------|----------------------|---------------|-------------------------------------------------------------------------------|
| `method`  | `string`             |               | The HTTP method to use for the request (e.g. "GET", "POST", "DELETE", "PUT"). |
| `url`     | `string`             |               | The URL to make the request to.                                               |
| `headers` | `roAssociativeArray` |               | An associative array of HTTP headers to include in the request.               |
| `data`    | `string`             |               | The data to include in the request body, if applicable.                       |



### Returns `string`