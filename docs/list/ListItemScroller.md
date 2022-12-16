# ListItemScroller


## Class Summary
-------------

The `ListItemScroller` class is a subclass of `ml.ItemScroller` and is used to handle the scrolling for a list component in a Roku application. It provides several methods for updating and manipulating the scroll position and focus of the list, as well as starting, cancelling, and ending item moves within the list. It also provides a method for setting the focus manager information and a method for getting the focus indicator configuration for the list.



##### Properties

*   `viewManager` (`ml.ItemViewManager`): The view manager for the list.
*   `focusManager` (`mc.types.node`): The focus manager for the list.


<br/>

## Methods
-------

### `setFocusManagerInfo()`
Sets focus manager information for the list.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `cellInfo` | `ml.CellInfo` | N/A | The current cell information. |
| `nextCellInfo` | `ml.CellInfo` | N/A | The next cell information. |
| `direction` | `integer` | N/A | The direction of the focus. |
| `isFloatingFocus` | `boolean` | N/A | Indicates whether the focus is floating. |



<br />

### `getFocusIndicatorConfig()`
-------------------------

Gets the focus indicator configuration for the list.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `cellInfo` | `ml.CellInfo` | N/A | The current cell information. |
| `direction` | `integer` | N/A | The direction of the focus. |
| `isFloatingFocus` | `boolean` | N/A | Indicates whether the focus is floating. |
| `isFromListScroll` | `boolean` | `false` | Indicates whether the focus is from a list scroll. |

Returns `ml.FocusIndicatorConfig` - The focus indicator configuration.


<br/>

### `setCellInfo()`

Sets the current cell information for the list.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `info` | `ml.CellInfo` | N/A | The cell information. |


### `setNextCellInfo()`
Sets the next cell information for the list.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `info` | `ml.CellInfo` | N/A | The cell information. |

### `updateSrollOffsetFraction()`

Updates the scroll offset fraction for the list.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `fraction` | `float` | N/A | The fraction to update the scroll offset. |



### `startItemMove()`

Starts the item move for the list.

###

### `cancelItemMove()`


Cancels the item move for the list.

######

### `endItemMove()`
-------------

Ends the item move for the list.

######

### `onMove()`
--------

Handles the move action for the list.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `dir` | `integer` | N/A | The direction of the move. |
| `isFloatingFocus` | `boolean` | N/A |