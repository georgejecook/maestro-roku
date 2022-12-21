# List

## Class Summary
The `List` component is a container component that allows users to display and interact with a scrollable list of items.
The `setContent` is a method of the `List` component that sets the `content` property of the `List` to the given `content` `node`. The `content` `node` must be a subnode of `RowContent`, which has the following structure:

```plain
<component
    name='ml_RowContent'
    extends='mc_Node'>
  <interface>
    <field
        id='title'type='string' />
    <field
        id='settings'type='node' />
    <field
        id='isHidden'type='boolean'
        value='false' />
    <field
        id='isFocusEnabled'type='boolean'
        value='true' />
  </interface>
</component>
```

The `title` field contains the title of the row, the `settings` field contains a `node` with settings for the row, the `isHidden` field is a boolean value indicating whether the row is currently hidden, and the `isFocusEnabled` field is a boolean value indicating whether the row can receive focus.


This will set the `content` property of `myList` to `myRowContentNode`.

When calling functions on the `List` component, you can use the `@` symbol to indicate that the function is being called on a `List` instance, as in the following example:

```plain
myList@.setContent(myContentNode)
```

The `List` component uses the `RowSettings` object to determine how to render the items in the list. The `RowSettings` object has the following fields:

*   `component`: a string that specifies the component to be used for rendering the row
*   `style`: a string that specifies the style to be used for rendering the row
*   `title`: a string that specifies the title of the row
*   `titleStyle`: a string that specifies the style to be used for rendering the title of the row
*   `focusSettings`: a `node` that contains the focus settings for the row
*   `headerSettings`: a `node` that contains the header settings for the row
*   `cellSettings`: a `node` that contains the cell settings for the row

The `List` component uses these settings to determine how to render each row in the list. The child items of the `List` are children of the `RowSettings` object, and the `ml_RowContent` object is a subnode of `mc_Node`, which is a special, more efficient node that allows for batching of changes.

Note that the `List` component does not automatically update itself when the `content` of the list changes. Instead, changes to the `content` must be communicated to the `List` using the `mc_Node` APIs, such as `notifyUpdate()`. In order to update individual child renderers, the child items must have a `version` field that is incremented when the child is updated.

Here is an example of how to use the `RowSettings` object to specify the rendering settings for a row in the `List`:

```plain
myRowSettings = {
    component: "GridRow",
    style: "default",
    title: "My Row Title",
    titleStyle: "default",
    focusSettings: {...},
    headerSettings: {...},
    cellSettings: {...}
}

myRowContent = {
    title: "My Row",
    settings: myRowSettings,
    isHidden: false,
    isFocusEnabled: true
}

myList@.setContent(myRowContent)
```

This code sets the `content` of the `List` to a `RowContent` node with the specified `RowSettings` object, which will be used to determine how the row is rendered in the list.


# Properties

*   `content`: a `node` that contains the items to be displayed in the list
*   `delegate`: a `node` that contains the delegate functions to be used by the list
*   `state`: the current state of the list (default is "none")
*   `width`: the width of the list in pixels (default is 1920)
*   `height`: the height of the list in pixels (default is 1080)
*   `isHidden`: a boolean value indicating whether the list is currently hidden (default is false)
*   `_updateNow`: a boolean value indicating whether the list should be updated immediately (default is false)
*   `_forceReloadListWhenPressingOption`: a boolean value indicating whether the list should be reloaded when the "option" button is pressed (default is false)
*   `isScrolling`: a boolean value indicating whether the list is currently scrolling (default is false)
*   `screenOffset`: the number of pixels that the list has been scrolled (default is 0)
*   `scrollDirection`: the direction in which the list is currently scrolling (default is 0)
*   `focusedRowIndex`: the index of the currently focused row in the list (default is 0)
*   `focusedSubRowIndex`: the index of the currently focused sub-row in the list (default is 0)
*   `focusedCellIndex`: the index of the currently focused cell in the list (default is 0)
*   `focusedfraction`: the fraction of the distance between the current and next focused cells (default is 0.0)
*   `focusIndicatorManager`: a `node` that manages the focus indicator for the list
*   `nextFocusIndex`: an array containing the indices of the next focused item in the list
*   `screenPos`: the current position of the list on the screen
*   `nextScreenPos`: the next position of the list on the screen

<br/>

## Methods

### `new()`

Creates a new instance of the List class.<br /> <br />
### `initialize()`
Initializes the list by creating the necessary views and managers.
<br /> <br />
### `setContent()`

Sets the content of the list to the specified value.


### Arguments

| Argument name | Type | Description |
| ---| ---| --- |
| `content` | `mc.types.node` | The new content for the list. This must be of type ListContent. |
<br />

### `synchronizeContent()`

Synchronizes the content of the list.
<br /> <br />

### `onUpdateNow()`

Forces an update of the list.
<br /> <br />

### `forceUpdate(fullUpdate)`

Forces an update of the list layout.
### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `fullUpdate` | `Boolean `| false | Whether to perform a full update or not. |
<br />

### `onContentChange()`

Updates the list when the content changes.
<br /> <br />

### `onIsHiddenChange()`
Updates the list when the isHidden property changes.
<br /> <br />


### `moveToEnd(direction, animated)`

Moves the focus to the end of the list in the specified direction.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `direction` | `Integer` | \-1 | The direction to move the focus. A value of -1 moves the focus to the start of the list, while a value of 1 moves the focus to the end of the list. |
| `animated` | `Boolean` | false | Whether to animate the movement of the focus. |

<br />

### `moveToRowItemIndex(rowIndex, itemIndex, focus)`

Moves the focus to the specified row and item index.

#### Arguments

| Argument name | Type | Description |
| ---| ---| --- |
| `rowIndex` | `Integer` | The index of |

<br />

### `getRow(index)`

Retrieves the row at the specified index.


### Arguments

| Argument name | Type | Description |
| ---| ---| --- |
| `index` | `Integer` | The index of the row to retrieve. |


### `getItem(rowIndex, index)`

Retrieves the item at the specified row and index.

### Arguments

| Argument name | Type | Description |
| ---| ---| --- |
| `rowIndex` | `Integer` | The index of the row that the item is in. |
| `index` | `Integer` | The index of the item within the row. |

### Return value

The item at the specified row and index, or `invalid` if the index is out of bounds or there is no content. The returned value is of type `dynamic`.

<br />

### `moveToRow(index, animated, animSpeedIndex)`

Moves the focus to the specified row.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `index` | `Integer` | None | The index of the row to move the focus to. |
| `animated` | `Boolean` | None | Whether to animate the movement of the focus. |
| `animSpeedIndex` | `Integer` | 0 | The index of the animation speed to use. |

<br />


### `moveToRowItemIndex(rowIndex, index, animated, animSpeedIndex)`

Moves the focus to the specified row and item index.

### Arguments
---------

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `rowIndex` | `Integer` | None | The index of the row to move the focus to. |
| `index` | `Integer` | None | The index of the item within the row to move the focus to. |
| `animated` | `Boolean` | None | Whether to animate the movement of the focus. |
| `animSpeedIndex` | `Integer` | 0 | The index of the animation speed to use. |
<br />


### `moveToSubRowIndex(index, animated, animSpeedIndex, setFocusIndex, useGridHack)`

Moves the focus to the specified sub-row index.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `index` | `Integer` | None | The index of the sub-row to move the focus to. |
| `animated` | `Boolean` | None | Whether to animate the movement of the focus. |
| `animSpeedIndex` | `Integer` | 0 | The index of the animation speed to use. |
| `setFocusIndex` | `Boolean` | false | Whether to set the focus index to the specified sub-row index. |
| `useGridHack` | `Boolean` | false | Whether to use the "grid hack" when moving the focus. |

### Return value
Void
<br />

### `setUpdatesEnabled(enabled)`

Enables or disables updates for the list.

### Arguments

| Argument name | Type | Description |
| ---| ---| --- |
| `enabled` | `Boolean` | Whether to enable updates for the list. |

### Return value

Void
<br />


### `getRowRenderer(index)`

Retrieves the row renderer at the specified index.

### Arguments

| Argument name | Type | Description |
| ---| ---| --- |
| `index` | `Integer` | The index of the row renderer to retrieve. |

### Return value

The row renderer at the specified index, or `invalid` if the index is out of bounds. The returned value is of type `dynamic`.

<br />

### `getCellRenderer(rowIndex, cellIndex)`

Retrieves the cell renderer at the specified row and cell index.

### Arguments

| Argument name | Type | Description |
| ---| ---| --- |
| `rowIndex` | `Integer` | The index of the row that the cell renderer is in. |
| `cellIndex` | `Integer` | The index of the cell renderer within the row. |

### Return value

The cell renderer at the specified row and cell index, or `invalid` if the index is out of bounds. The returned value is of type `dynamic`.
<br />


### `getFocusedRow()`

Retrieves the focused row renderer.

### Return value

The focused row renderer, or `invalid` if there is no focused row renderer. The returned value is of type `dynamic`.
<br />

### `getFocusedCell()`

Retrieves the focused cell renderer.

### Return value

The focused cell renderer, or `invalid` if there is no focused cell renderer. The returned value is of type `dynamic`.
<br />

### `getFocusedRowContent()`

Retrieves the content of the focused row.

### Return value

The content of the focused row, or `invalid` if there is no focused row or no content. The returned value is of type `dynamic`.
<br />

### `getFocusedCellContent()`

Retrieves the content of the focused cell.

### Return value

The content of the focused cell, or `invalid` if there is no focused cell or no content. The returned value is of type `dynamic`.

