# ListItemViewManager

## Class Summary
ListItemViewManager is a class that manages the creation, rendering, and recycling of rows or cells in a list component. It maintains a pool of reusable row components to optimize performance when the list has a large number of items. It also handles user interactions, such as scrolling and focusing on list items, and updating the list layout when the content of the list changes.



The List Item View Manager is typically used in conjunction with a List Mixin, which provides the data for the list.The List Item View Manager takes the data provided by the List Mixin and manages the rendering and layout of the items



#### Properties



\*   \`componentBufferMode\` (\`string\`): Determines how components are treated when they are not being rendered.

\*   `contentManager` (\`ml.ListContentManager\`): The list content manager for the list.





## Methods

<br />

## `createRenderers`
Creates renderers for the specified `content` and updates the `visibleComponents` and `visibleItems` arrays.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `content` | `mc.types.node` | N/A | The content for which to create renderers. |
| `forceSync` | boolean | `false` | A flag indicating whether to create renderers synchronously (`true`) or asynchronously (`false`). |

### Returns
*   A boolean value indicating whether the renderers were created successfully (`true`) or not (`false`).


<br />

## `getRenderer`
Retrieves the renderer at the specified index in the `visibleComponents` array.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `index` | integer | N/A | The index of the renderer in the `visibleComponents` array. |


<br />

## `createRow`
Creates a row component for the specified `rowContent` and adds it to the `container`. The component is initialized with the provided `settings` and `rect` values.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `rowContent` | `mc.types.node` | N/A | The content for the row. |
| `index` | integer | N/A | The index of the row in the list. |
| `settings` | `mc.types.node` | N/A | The settings for the row. |
| `rect` | `mc.types.assocarray` | N/A | The rect for the row. |

### Returns

*   The newly created row component.


<br />

## `updateLayout`
Updates the layout of the rows in the list.
### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `fullUpdate` | boolean | `false` | A flag indicating whether to perform a full update (`true`) or a partial update (`false`). |



## `updateRects`
Updates the `rects` array and the `visibleComponents` and `visibleItems` arrays based on the current content of the list.

### Returns

*   void



## `onContentItemsChange`
----------------------

Updates the list's row renderers and processes changes in the item scroller when the list's content items change.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `changes` | `mc.types.array` | N/A | An array of changes that occurred in the list's content. |



<br />

## `isFlowFocusPossible`
---------------------

Determines whether flow focus is possible for a given cell info, direction, and active screen position.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `info` | `ml.CellInfo` | `invalid` | The cell info to check for flow focus. |
| `direction` | `integer` | N/A | The direction to check flow focus in. |
| `activeScreenPos` | `integer` | N/A | The current active screen position. |


<br/>

## `getItemInfoForIndex`
---------------------

Gets the item info for a given row index and cell index.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `rowIndex` | `integer` | N/A | The index of the row to get the item info for. |
| `cellIndex` | `integer` | N/A | The index of the cell to get the item info for. |


<br/>

## `getIndexAtPosition`

Gets the index of the item at a given position and direction.

### Arguments
---------

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `position` | `integer` | N/A | The position to get the index at. |
| `direction` | `integer` | N/A | The direction to get the index in. |


<br />

## `recalculateCellInfos`
Recalculates the list's cell info.

### Arguments
---------

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| None | None | None | None |