## Feature Overview

### Hyper-performant, with highly customizable performance

   - Choose how many rows/cells you want to precache in the `ComponentPool`
   - Specify the strategy for row/cell reuse
   - So you can choose if you want to keep ram low and be lazy with instantiation, or instantiate up front (maybe while loading data), so the list is snappy and smooth from the get go
   - Performs better than any roku list control, on all devices tested (even roku se1)
   - CPU usage is less than roku rowlists in all tests, even with rich animations, and many delegate callbacks
   
### Reuses cells aggressively

   - Reuses cells across whole app, not just within once list
   - In native comparisons, roku's rowlists end up using 1,000's of cells compared to a few hundred for maestro-roku-list
   - Use the reuse policy that makes sense for you
   
### Use any component as a renderer, anywhere

   - The list can use more than one type of renderer (i.e itemComponent)
   - Use different renderers in different rows
   - And even use different renderers, in different cells, in the same row
   
### Use custom renderers for rows

   - Can be any visual component you wish
   - Mix regular components with rows (e.g. buttons, posters, video, etc)
   - All Sub-components of maestro-roku-list get focus, so you can code as you normally would for custom rows (e.g. have buttons that get/lose focus, get keypresses, etc)
   
### Custom focus indicator settings, per row:

   - Choose if a row has focus indicator: 
      - underneath
      - onTop
      - none
   - Can change focus color, per row
   - Change image per row,
   - Can provide offsets for focus indicator position and size
   
### Easy to write custom cells

   - Extend a base nodeclass, and override onContentChange method
   
### Easy to use callbacks for facilitating whatever choreography you wish

The maestro-list paradigm for responding to focus, selection and other events, such as scrolling, is to implement _delegate_ callbacks. 

Delegate callbacks can be defiend in:
 
 - A screen/view containing a list
 - In a Custom row component
 - In a cell component

### Comes with grid support, out-of-the-box

 - You can choose to use the deafult `ml_HorizontalRow` to render your `ml_RowContent`, or `ml_GridRow`, which renders content in a grid.
 - Grids and regular rows (in fact, all custom rows, too), can be rendered in the same list

### Callbacks in cells and rows

   - Simply extend `ml_BaseRow` for a custom Row, or `ml_BaseCell` and implement any of the delegate methods (`onWillLoseFocus`, `onLosingFocus`, `onDidGainFocus`, `onWillExit`, `onDidExit`, `onScrollingChange`, `onScrollingUpdate`)
   - All delegate callbacks provide info for fraction of animnation, and direction
   - Event mechanism is super efficient

### Callbacks for the whole list

   - Screens/Views can register to listen to events on the whole list, by simply calling `ml.delegateMixin.setListDelegate(myList)`
     - there are callback methods for rows, cells and the list, providing callbacks like:
     - `onRowLosingFocus(rowIndex as integer, direction as integer, fraction as float)`
     - `onItemSelected(rowIndex as integer, itemIndex as integer)`
     - `onCellWillGainFocus(rowIndex as integer, itemIndex as integer, direction as integer)`
     
  ### Get renderers for any row or cell

  - `row = m.list@.getRowRenderer(rowIndex)`
  - `cell = m.list@.getCellRenderer(rowIndex, cellIndex)`
  - `cell = row@.getRenderer(index)`
  
  ### Get screen rectangle position for any cell:

   - `getRowScreenRect(rowIndex, cellIndex)`
   - `getCellScreenRect(rowIndex, cellIndex)`
   
### Rows can easily be show/hidden made focusable/un-focusable:

   - Simply change `isFocusEnabled` and `isHidden` values on the row's content
   
### Simple data model

No more guessing/wrestling with arrays, maestro-roku-list has models for:

   - `ListContent`
     - has `ListSettings`, `RowSettings` and `FocusSettings` which are replied to whole ist
      - Contains the rows (i.e. `RowContent`, which will be rendered vertically in the list)
   - `RowContent`
     - the children of ListContent
     - has `RowSettings` which can be tailored to specific row, allowing overriding of
     - contains the content items, which will be rendered by the row
   - `RowSettings` specify:
     - height of the row,
     - spacing,
     - *exact location on screen* when scrolled to
     - Row renderer, - can be any component you wish that extends `ml_BaseRow`
     - and additional settings:
       - `HeaderSettings` - font, insets, background style, color, and even custom header component
       - `FocusSettings` - focus animation style, placement, colors, image uri
       - `CellSettings` - specify the cell size, space, exact screen position when scrolled to
       
### Debug in RALE

   -  no more headaches, everything in a maestro-roku-list is in your scene graph, and can be debugged in RALE
   -  you have full control!

