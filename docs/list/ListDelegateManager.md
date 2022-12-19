# ListDelegateManager

## Class Summary
-------------

The `ListDelegateManager` class is responsible for handling delegate events for the `List` component. It provides a set of methods for calling delegate methods on the `List` delegate and the individual rows and cells of the `List`.

<br/>

## Methods
-------

### `callCellDelegateMethod()`

Calls a delegate method on the `List` delegate and the cell component for a given cell event.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `eventName` | `string` | N/A | The name of the event for which to call the delegate method. |
| `event` | `mc.types.assocarray` | N/A | An associative array containing information about the event. |



<br/>

### `callRowDelegateMethod()`

Calls a delegate method on the `List` delegate and the row component for a given row event.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `eventName` | `string` | N/A | The name of the event for which to call the delegate method. |
| `event` | `mc.types.assocarray` | N/A | An associative array containing information about the event. |



Method Descriptions
-------------------

The `callCellDelegateMethod()` and `callRowDelegateMethod()` methods are called to handle delegate events for cells and rows, respectively. They do the following:

1.  They determine the name of the delegate method to call based on the `eventName` parameter and the `cellDelegateFunctionMap` or `rowDelegateFunctionMap` maps (for `callCellDelegateMethod()` and `callRowDelegateMethod()`, respectively).
2.  They determine the name of the component method to call based on the `eventName` parameter and the `componentFunctionMap` map.
3.  They call the component method on the cell or row component with the appropriate arguments.
4.  If `isNotifyingListDelegate` is `true`, they call the delegate method on the `List` delegate with the appropriate arguments.