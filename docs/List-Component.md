# Overview

Lists on roku, without the headache and heartbreak

## About

The maestro list component allows us to make screens, that are much like NetFlix (cerca 2022), with a much simpler programming model than the standard roku framework lists and grids

Maestro list considers the screen as a series of rows of content, stacked on top of each other.
The content can be _anything_ e.g.

- rows of horizontal cells (easily achieved using the built in `ml_HorizontalRow`)
- grids of cells (using built in `ml_GridRow`)
- custom headers, with any components you wish
- other custom row types


The only requirement is that the rows extend `ml_BaseRow`.

Maestro list differs from roku's built in lists in many ways:

- All views are rendered in SceneGraph and can be easily debugged, in a tool like RALE or the vscode ide
- The rows get real focus, and can respond to remote control events, and contain any SceneGraph control, such as buttons, video players, custom controls
- Configuration and settings are done at the _row level_ - you specify the settings for each row - the list has no central arrays or settings
- Moving the list focus is done exclusively with simple, logical API calls. You do not have to guess how to make something happen
- Repsponding to the list, is easy, by just adding a delegate to your list, and implementing any of the (optional) function callbacks, either on your custom row, your cell, or on any component you choose to designate as your list's delegate, such as your screen. This makes it very simple to quickly create rich animations and UX, with very few lines of code and no need for hacks or tricks.
- The rendering strategy is defined by the developer, they can choose to render the entire list, or just a subset of it, based on the heuristics they choose, to better suit the hardware they are running on: Running on a new box with tons of ram? render everything for maximum smoothness - running on an old roku with 256 or 512mb of ram, then only render a few rows at a time.
- Memory for cells can be freed up, as soon as your list is off screen. Simply setting the list's isHidden field to true, with instantly have it hide all used renderers, if desired, so that no matter how many screens you drill into, you are reusing the same pool of cell renderers

## How to use

### Create list content
List content must extend the `ml_ListContent` content node. It has a few important characteristics:

- Extends `mc_Node` special ContentNode, which allows for children to be stored _without a parent relationship_
  - This means that the children of the mc_Node can be contained in any number of mc_Node objects, with the exact same instance, without the need to clone
  - It also means that you *must* use the callfunc versions of children related methods, for:
    - getChildren
    - getChild
    - clear
    - appendChild
    - replaceChild
    - insertChild
    - insertChildren
    - removeChildIndex
    - appendChildren
    - removeChildrenIndex
    - removeChildren
    - removeChild
    - the length property to know how many children are in the node
- Contains the special nodes:
    - listSettings - instance of `ml_ListSettings`
    - rowSettings - instance of `ml_ListSettings`
    - focusSettings - instance of `ml_FocusSettings`

The easiest way to create list content is using the `ListMixin.bs` method, as follows:

`content = ml.listMixin.createListContent(focusSettings, rowSettings, listSettings)`

Or, without any arguments, for default values:

`content = ml.listMixin.createListContent()`

#### Example list content creation:

```
    cellSettings = ml.listMixin.createCellSettings("PosterCellEfficient", [400, 250], 30)

    timer = new mc.utils.DebugTimer("list")

    focusSettings = ml.listMixin.createFocusSettings("fixed")
    rowSettings = ml.listMixin.createRowSettings(cellSettings, focusSettings, 30)
    listSettings = ml.listMixin.createListSettings(-1, -1)
    listSettings.sendScrollStartStop = false
    listSettings.sendScrollUpdate = false
    listSettings.rowCreationStrategy = "async"
    listSettings.rowCreationBatchSize = 5
    listSettings.rowCreationBatchDelay = 0.3

    listSettings.renderStrategy = "dynamic"
    listSettings.numberItemsToRenderAfter = 5
    listSettings.numberItemsToRenderBefore = 3

    content = ml.listMixin.createListContent(m.focusSettings, m.rowSettings, listSettings)
```

The full list of settings, and what they do is described below

#### List settings

TBD

## Add Rows

