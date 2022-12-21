# Tasks

## Functions

<br/>

## `setTimeout`
Schedules a function to be called after a specified delay.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `callback` | function |  | The function to be called after the specified delay. |
| `duration` | float | 0.01 | The delay in seconds before calling the function. |
| `sendMode` | string | "none" | The send mode to use when calling the function. Possible values are "none", "queued", and "direct". |
| `scope` | object |  | The object to use as the "this" value when calling the function. |
| `parent` | mc.types.node |  | The parent node to attach the timer to. |


### Returns `timer - mc.types.node`
---
<br/>

`setInterval`
Schedules a function to be called repeatedly at a specified interval.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `callback` | function |  | The function to be called at the specified interval. |
| `duration` | float | 0.01 | The interval in seconds between calls to the function. |
| `sendMode` | string | "none" | The send mode to use when calling the function. Possible values are "none", "queued", and "direct". |
| `scope` | object |  | The object to use as the "this" value when calling the function. |
| `parent` | mc.types.node |  | The parent node to attach the timer to. |

### Returns `timer - mc.types.node`


---

<br/>


## `cancelTimeout`
Cancels a previously scheduled timeout.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| `timer` | mc.types.node |  | The timer node to be canceled |



---

<br/>


## `createTask`

Creates a task node of the specified `taskType` with the provided `fields` and returns it.

### Arguments

| Argument | Type | Default Value | Description |
| ---| ---| ---| --- |
| `taskType` | `string` | N/A | The type of task node to create. |
| `fields` | `object` | N/A | An object containing the fields to set on the created task node. |
| `callback` | `function` | `invalid` | A function to call when the task node's `fieldName` field changes. |
| `isRunning` | `boolean` | `true` | Whether the task should start running immediately after it is created. |
| `sendMode` | `string` | `"value"` | The send mode to use when observing the task node's `fieldName` field. Possible values are `"value"`, `"diff"`, and `"none"`. |
| `scope` | `object` | `invalid` | The scope to use when calling the `callback` function. |
| `fieldName` | `string` | `"output"` | The name of the field to observe on the task node. |

### Returns `mc.types.node`

| Type | Description |
| ---| --- |
| `object` | The created task node. If the task node could not be created, returns `invalid`. |


<br />

## `observeNodeField`
Observes the given `fieldName` field on the `node` and calls the `callback` function when the field changes. If `sendMode` is set to "fieldAndValue", the `fieldAndValueTargetField` is set to the field name and value when the `callback` function is called. If `once` is set to `true`, the observer is removed after the first field change. If a `scope` is provided, the `callback` function is called with the `scope` as the `this` value. If `callback` is a string, it is assumed to be a member of the `scope` object and is called as a method on the `scope` object.



### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `node` | `mc.types.node` | N/A | The node to observe. |
| `fieldName` | `string` | N/A | The name of the field to observe. |
| `callback` | `function` | N/A | The function to call when the value of the field changes. |
| `sendMode` | `string` | `"value"` | Determines what value should be passed to the callback function when it is called. Can be `"value"` or `"fieldAndValue"`. |
| `once` | `boolean` | `false` | If `true`, the callback will be called only once, then the observer will be removed. |
| `scope` | `object` | `invalid` | The object that the callback function is a member of, if it is a member function. |
| `fieldAndValueTargetField` | `string` | `invalid` | The field to set on the scope object when the `sendMode` is `"fieldAndValue"`. |

### Returns

`boolean`: `true` if the observer was successfully set up, `false` if there was an error.


<br />

## `unObserveNodeField`
This method removes a callback from observing a specific field of a node.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `node` | `mc.types.node` | N/A | The node to unobserve. |
| `fieldName` | `string` | N/A | The name of the field to unobserve. |
| `callback` | `float` | N/A | The callback function to remove from observing the field. |
| `scope` | `object` | `invalid` | The scope to which the callback belongs. |


<br />

## `cleanNodeObserver`
This method is used to remove all observers for a particular field on a node.

### Arguments

| argument name | type | description |
| ---| ---| --- |
| node | mc.types.node | The node whose observers should be removed. |
| fieldName | string | The name of the field whose observers should be removed. |


<br />

## `cleanScope`
This method is used to remove all observers for the current scope.

---
<br />

## `cancelTask`
This method is used to stop a task and remove any observers for the task's output field.

### Arguments

| argument name | type | description |
| ---| ---| --- |
| task | mc.types.node | The task to stop and remove observers for. |

<br />
<br />


# ValueObserver


Class summary
-------------



The `ValueObserver` class allows you to observe a field on a node and define callback functions to be executed when the value of the field matches certain conditions. The conditions are specified using comparators such as "=" for equality, ">" for greater than, "<" for less than, etc.



## Methods
<br />

## `new`
Constructs a new instance of the `ValueObserver` class.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| node | `mc.types.node` |  | The node to observe. |
| field | `string` |  | The field of the node to observe. |
| target | `object` |  | The object to execute the callback in. |


<br />

## `reset`
Resets the `pendingComparators` field.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| hardReset | `boolean` | `false` | If `true`, resets the `comparators` field as well. |

<br />

## `destroy`
Stops observing the node and field and removes all comparators.

### Arguments

None.

<br />

## `onValue`
Registers a callback to be executed when the observed field has a value matching the specified `value` and `comparator`.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| value | `dynamic` |  | The value to compare the observed field value against. |
| func | `function` |  | The callback to execute when the comparison is true. |
| comparator | `string` | `"="` | The comparator to use for the comparison. Can be `"="`, `">"`, `">="`, `"<"`, `"<="`, or `"<>"`. |
| mode | `string` | `"value"` | The mode of the callback. Can be `"value"`, `"field"`, or `"both"`. |

<br />


## `valueCallback`
Compares the value of the observed field against the registered comparators and executes the corresponding callback if a match is found.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| value | `dynamic` |  | The value of the observed field. |
| node | `mc.types.node` |  | The node being observed. |

<br />
<br />


# TaskRunner
## Class summary
A class that allows you to create and run a group of tasks. It provides support for running tasks in either parallel or sequential mode and has the ability to cancel or reset the group of tasks.

<br/>

## Methods

<br/>

## `run`

Starts the group of tasks.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| callback | function | none | A function to be called when all tasks are complete |
| runMode | string | "sequential" | The mode in which to run the tasks. Can be "sequential" or "parallel". |
| tasks | mc.types.array | invalid | An optional array of tasks to run. If not provided, the tasks property of the class will be used. |


## `createTask`

Adds a new task to the group of tasks.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| taskType | string | none | The type of task to create. |
| fields | mc.types.assocarray | none | An associative array of fields to set on the task. |
| callback | function | invalid | An optional callback function to be called when the task is complete. |
| sendMode | string | "value" | The mode in which to send the value of the task's field to the callback function. Can be "value", "field", or "both". |
| fieldName | string | "output" | The name of the field to observe on the task. |


## `cancel`

Cancels the group of tasks.


## `reset`

Resets the group of tasks.