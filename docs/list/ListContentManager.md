# List Content Manager

## Class Summary
The `ListContentManager` class manages the content of a `List` component in Roku. It has a reference to a `List` object, a `ListItemViewManager` object, a `ListItemScroller` object, and a focus indicator manager node. It is responsible for synchronizing the content of the `List` with the `ListItemViewManager` and `ListItemScroller`, and for maintaining the state of the rows and cells in the `List`.

Creates a new instance of the `ListContentManager` class.


## Interfaces
### `RowContentInfo`

An interface representing information about a row in the `List`.


*   `row` (`roSGnode`): The row node.
*   `version` (`integer`): The version of the row.
*   `isHidden` (`boolean`): A flag indicating whether the row is hidden.
*   `isFocusEnabled` (`boolean`): A flag indicating whether the row is focusable.


## Properties
### `content` (`roSGnode`)

Gets or sets the content of the `List`.

<br/>

## Methods

## `new`
This is the constructor for the ListContentManager class.

### Arguments
| Argument Name  | Type       | Default Value | Description                 |
|----------------|------------|---------------|-----------------------------|
| `list`         | `roSGnode` | N/A           | The list  object.           |
| `viewManager`  | `roSGnode` | N/A           | ListItemViewManager object. |
| `itemScroller` | `object`   | N/A           | ListItemScroller object     |
| `focusIndicatorManager` | `roSGnode`  | A node that manages the focus indicators for the `List`. |



## `setContent`
Sets the content of the `List`. If the content has changed, the `List` is reset and the content is synchronized with the `ListItemViewManager` and `ListItemScroller`.

### Arguments
---------

| Argument Name | Type       | Default Value | Description                        |
|---------------|------------|---------------|------------------------------------|
| `content`     | `roSGnode` | N/A           | The content to set for the `List`. |


## `setUpdatesEnabled`

Enables or disables updates to the `List`. If updates are disabled, the `List` will not be reset or synchronized with the `ListItemViewManager` and `ListItemScroller`.

### Arguments
---------

| Argument Name | Type      | Default Value | Description                                                      |
|---------------|-----------|---------------|------------------------------------------------------------------|
| `enabled`     | `boolean` | N/A           | A flag indicating whether updates should be enabled or disabled. |



<br />

## `synchronizeContent`

Synchronizes the content of the `List` with the `ListItemViewManager` and `ListItemScroller`. It updates the rows and cells in the `List` based on the content, and handles any changes to the content.

### Arguments
---------

| Argument Name | Type      | Default Value | Description                                                                   |
|---------------|-----------|---------------|-------------------------------------------------------------------------------|
| `notifyRows`  | `boolean` | `true`        | A flag indicating whether the rows should be notified of the content changes. |



The `synchronizeContent` method does the following:

1.  It gets the current focused row and cell from the `ListItemScroller` and stores them in `previousFocusedRowInfo` and `previousFocusedCellInfo`, respectively.
2.  It iterates through the rows in the content and updates their content with the `updateContentOnRow` method.
3.  It handles any changes to the content by calling the `onListContentItemsChange` method.
4.  It updates the `List` if necessary with the `updateListContentIfRequired` method.
5.  It updates the focus of the `List` with the `updateListFocus` method.

<br/>

## `setContentOnRow`

Sets the content of a row in the `List`.

### Arguments
---------

| Argument Name | Type                  | Default Value | Description                                                                 |
|---------------|-----------------------|---------------|-----------------------------------------------------------------------------|
| `row`         | `roSGnode`            | N/A           | The row node to set the content for.                                        |
| `content`     | `roSGnode`            | N/A           | The content to set for the row.                                             |
| `notifyRow`   | `boolean`             | `false`       | A flag indicating whether the row should be notified of the content change. |
| `result`      | `ml.ListChangeResult` | `invalid`     | An object that contains information about the changes made to the `List`.   |

This method does the following:

1.  It updates the `RowContentInfo` for the row with the `updateRowContentInfo()` method.
2.  If `notifyRow` is `true`, it applies the content change to the row with the `applyRowContentChange` method.