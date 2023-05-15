# Callbacks

Maestro list communicates via delegate callbacks.

Screens and views registers for delegate callbacks with the `ml.DelegateMixin.SetListDelegate(list_instance)` function.

Rows and Cells are automatically registered.

Once registered for a callback, one need only implement the function to receive callbacks:
The system is very efficient, and will not waste cpu processing callbacks for any events that do not have a callback function implemented.

All functions, should be implemented as private or protected.

All fractions are 0.0 to 1.0

Directions are:

 - -1 left or up
 - 0 - none
 - 1 right or down

### Cell callbacks

Cells, which extend `ml_BaseCell` can implement the following functions:

|   Function    |   Description    |
|  ---  |  ---  |
|`onScrollingChange(isScrolling as boolean, isLong as boolean)`|   Scrolling has stopped or started - if isLong is short, then it's just a simple press    |
|`onScrollingUpdate(startIndex as integer, currentIndex as integer)`| Scrolling has continue to the new index at `currentIndex` - having started at `startIndex`     |
|`onWillExit(direction as integer)`| This cell will leave the list of rendering viewport      |
|`onWillEnter(direction as integer)`| This cell will enter the rendering viewport      |
|`onDidEnter(direction as integer)`|  This cell entered the rendering viewport     |
|`onDidExit(direction as integer)`| This cell left the rendering viewport      |
|`onWillGainFocus(direction as integer)`|  This cell will gain focus       |
|`onWillLoseFocus(direction as integer)`|  This cell will lose focus     |
|`onDidGainFocus(direction as integer)`| This cell did gain focus      |
|`onDidLoseFocus(direction as integer)`|  This cell did lose focus     |
|`onGainingFocus(direction as integer, fraction as float)`|  This cell is gaining focus     |
|`onLosingFocus(direction as integer, fraction as float)`|  This cell is losing focus     |


### List callbacks

A screen or view can register for callbacks with `ml.DelegateMixin.SetListDelegate(list_instance)` function.
, and implement any of the following callbacks:

|   Function    |   Description    |
|  ---  |  ---  |
|`onItemSelected(rowIndex as integer, cellIndex as integer)`|  The cell at this row and cell index was selected       |
|`onScrollingChange(isScrolling as boolean, isLong as boolean)`|   Scrolling has stopped or started - if isLong is short, then it's just a simple press    |
|`onScrollingUpdate(startIndex as integer, currentIndex as integer)`| Scrolling has continue to the new index at `currentIndex` - having started at `startIndex`     |
|`onRowWillExit(rowIndex as integer, direction as integer)`| This row will leave the list of rendering viewport      |
|`onRowWillEnter(rowIndex as integer, direction as integer)`| This row will enter the rendering viewport      |
|`onRowDidEnter(rowIndex as integer, direction as integer)`|  This row entered the rendering viewport     |
|`onRowDidExit(rowIndex as integer, direction as integer)`| This row left the rendering viewport      |
|`onRowWillGainFocus(rowIndex as integer, direction as integer)`|  This row will gain focus       |
|`onRowWillLoseFocus(rowIndex as integer, direction as integer)`|  This row will lose focus     |
|`onRowDidGainFocus(rowIndex as integer, direction as integer)`| This row did gain focus      |
|`onRowDidLoseFocus(rowIndex as integer, direction as integer)`|  This row did lose focus     |
|`onRowGainingFocus(rowIndex as integer, direction as integer, fraction as float)`|  This row is gaining focus     |
|`onRowLosingFocus(rowIndex as integer, direction as integer, fraction as float)`|  This row is losing focus     |
|`onCellWillExit(rowIndex as integer, cellIndex as integer, direction as integer)`| This cell will leave the list of rendering viewport      |
|`onCellWillEnter(rowIndex as integer, cellIndex as integer, direction as integer)`| This cell will enter the rendering viewport      |
|`onCellDidEnter(rowIndex as integer, cellIndex as integer, direction as integer)`|  This cell entered the rendering viewport     |
|`onCellDidExit(rowIndex as integer, cellIndex as integer, direction as integer)`| This cell left the rendering viewport      |
|`onCellWillGainFocus(rowIndex as integer, cellIndex as integer, direction as integer)`|  This cell will gain focus       |
|`onCellWillLoseFocus(rowIndex as integer, cellIndex as integer, direction as integer)`|  This cell will lose focus     |
|`onCellDidGainFocus(rowIndex as integer, cellIndex as integer, direction as integer)`| This cell did gain focus      |
|`onCellDidLoseFocus(rowIndex as integer, cellIndex as integer, direction as integer)`|  This cell did lose focus     |
|`onCellGainingFocus(rowIndex as integer, cellIndex as integer, direction as integer, fraction as float)`|  This cell is gaining focus     |
|`onCellLosingFocus(rowIndex as integer, cellIndex as integer, direction as integer, fraction as float)`|  This cell is losing focus     |

### Custom row data communication

Custom rows (i.e. any row that extends `BaseRow`) can communicate with the outside world, useing the same delegate system; but with custom data.

In that case, the custom row will send the custom data, via the `m.sendRowData(data)` function, which sends any (i.e dynamic typed) data

The screen/view then uses this callback function:


|   Function    |   Description    |
|  ---  |  ---  |
|`onRowData(rowIndex as integer, data as dynamic)`| data contains the data the row sent|


### Row callbacks

Rows, which extend `ml_BaseRow` can implement the following functions:

|   Function    |   Description    |
|  ---  |  ---  |
|`onScrollingChange(isScrolling as boolean, isLong as boolean)`|   Scrolling has stopped or started - if isLong is short, then it's just a simple press    |
|`onScrollingUpdate(startIndex as integer, currentIndex as integer)`| Scrolling has continue to the new index at `currentIndex` - having started at `startIndex`     |
|`onWillExit(direction as integer)`| This cell will leave the list of rendering viewport      |
|`onWillEnter(direction as integer)`| This cell will enter the rendering viewport      |
|`onDidEnter(direction as integer)`|  This cell entered the rendering viewport     |
|`onDidExit(direction as integer)`| This cell left the rendering viewport      |
|`onWillGainFocus(direction as integer)`|  This cell will gain focus       |
|`onWillLoseFocus(direction as integer)`|  This cell will lose focus     |
|`onDidGainFocus(direction as integer)`| This cell did gain focus      |
|`onDidLoseFocus(direction as integer)`|  This cell did lose focus     |
|`onGainingFocus(direction as integer, fraction as float)`|  This cell is gaining focus     |
|`onLosingFocus(direction as integer, fraction as float)`|  This cell is losing focus     |

