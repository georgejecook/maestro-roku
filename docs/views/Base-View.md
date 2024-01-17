# Base View

Class summary
-------------

It is the base class for most of the application views. It provides a number of methods that can be used to manage the state and behavior of a view, such as showing and hiding the view, setting and checking focus, and handling long press events. It also provides methods for working with selection nodes, which seem to be used to perform actions on groups of items. The class includes a number of methods that are called at different points in the lifecycle of a view, such as when the view is shown or hidden, or when it gains or loses focus.



Methods
-------



## `new`

This method is a constructor for the BaseView class. It initializes a new instance of the class and sets the name of the instance.

### Arguments
---------

| argument name | type   | default value | description               |
|---------------|--------|---------------|---------------------------|
| name          | string | n/a           | The name of the instance. |

<br/>

## `initializeView`
This method initializes a view with a given set of arguments.

### Arguments
---------

| argument name | type     | default value | description             |
|---------------|----------|---------------|-------------------------|
| view          | roSGnode | invalid       | The view to initialize. |
| args | roArray | invalid | The arguments to pas

<br />

## `setFocus`
This method sets focus on a given target node.

### Arguments
---------

| argument name | type     | default value | description                                                                                |
|---------------|----------|---------------|--------------------------------------------------------------------------------------------|
| target        | roSGnode | n/a           | The node to set focus on.                                                                  |
| forceSet      | boolean  | false         | A flag indicating whether to force the focus to be set, even if the node is not focusable. |

<br />

## `setFocusLocked`
This method sets focus on a given target node and locks focus on that node until it is unlocked.

Arguments
---------

| argument name | type     | default value | description                                |
|---------------|----------|---------------|--------------------------------------------|
| target        | roSGnode | invalid       | The node to set focus on.                  |
| message       | string   | n/a           | A message to display when focus is locked. |

<br/>

## `isControlFocused`
This method checks if a given control is currently focused.

### Arguments
---------

| argument name | type     | default value | description                    |
|---------------|----------|---------------|--------------------------------|
| control       | roSGnode | invalid       | The control to check focus on. |

<br/>

## `applyDataMapToControls`
This method applies a data map to a set of controls. A data map specifies the path to data for a field.

Arguments
---------

| argument name | type    | default value | description                               |
|---------------|---------|---------------|-------------------------------------------|
| dataSource    | dynamic | invalid       | The data source to apply the data map to. |
| controls      | roArray | invalid       | The controls to apply the data map to.    |

<br/>

## `toggleLongPressTimer`
This method toggles a timer for long press events. If the interval is greater than 0, the timer is started and set to repeat. If the interval is 0, the timer is stopped and reset. If a long press is in progress, it will be finished.

### Arguments
---------

| argument name | type  | default value | description                                              |
|---------------|-------|---------------|----------------------------------------------------------|
| interval      | float | n/a           | The interval at which the timer should fire, in seconds. |

<br />

### `onLongPressTimerFire`
This method is called when the long press timer fires. It will either start or update a long press event, depending on the current state of the event.

### Arguments
None. This method does not take any arguments.

<br />

## `createSelection`
This method creates a selection node with a given set of properties.

### Arguments
---------

| argument name     | type               | default value   | description                                              |
|-------------------|--------------------|-----------------|----------------------------------------------------------|
| initialItem       | roSGnode           | n/a             | The initial item in the selection.                       |
| action            | string             | "display"       | The action to perform on the selection.                  |
| actionInfo        | roAssociativeArray | {}              | Additional information about the action to perform.      |
| targetScreen      | string             | ""              | The name of the target screen for the action.            |
| selectionCompName | string             | "mc\_Selection" | The name of the component to use for the selection node. |

<br/>

## `executeSelection`
This method executes a selection node. It assumes that there is an "appController" instance in the IOC that has an "onExecuteSelection" method.

Arguments
---------

| argument name                  | type     | default value | description                                                                              |
|--------------------------------|----------|---------------|------------------------------------------------------------------------------------------|
| selection                      | roSGnode | n/a           | The selection node to execute.                                                           |
| observeIfPendingAfterExecution | boolean  | true          | A flag indicating whether to observe the selection node if it requires async resolution. |

<br/>

## `cancelPendingSelection`
This method cancels a pending selection node.

### Arguments
---------

| argument name | type     | default value | description                   |
|---------------|----------|---------------|-------------------------------|
| selection     | roSGnode | n/a           | The selection node to cancel. |

<br/>

## `destroy`
This method destroys the current view.

### Arguments
---------
None. This method does not take any arguments.

<br/>

## `onFirstShow`
This method is called when the view is shown for the first time.

### Arguments
---------
None. This method does not take any arguments.

<br/>

## `onShow`
This method is called when the view is shown.

### Arguments
---------
None. This method does not take any arguments.

<br/>

## `onHide`
This method is called when the view is hidden.

### Arguments
---------
None. This method does not take any arguments.

<br/>

## `onGainedFocus`
This method is called when the view gains focus.

Arguments
---------

| argument name | type    | default value | description                                                                               |
|---------------|---------|---------------|-------------------------------------------------------------------------------------------|
| isSelfFocused | boolean | n/a           | A flag indicating whether the focus was gained by the view itself or a child of the view. |

<br/>

## `onLostFocus`
This method is called when the view loses focus.

### Arguments
---------
None. This method does not take any arguments.

<br/>

## `onSelectionStateChange`
This method is called when the state of a selection node changes.

### Arguments
---------
| argument name | type     | default value | description                                 |
|---------------|----------|---------------|---------------------------------------------|
| state         | string   | n/a           | The new state of the selection node.        |
| selection     | roSGnode | n/a           | The selection node whose state has changed. |

<br/>

## `onSelectionCompletionStateChange`
This method is called when the completion state of a selection node changes.

### Arguments
---------

| argument name   | type     | default value | description                                            |
|-----------------|----------|---------------|--------------------------------------------------------|
| completionState | string   | n/a           | The new completion state of the selection node.        |
| selection       | roSGnode | n/a           | The selection node whose completion state has changed. |

<br/>

## `onAddedToAggregateView`
This method is called when the view is added to an aggregate view.

### Arguments
---------

| argument name | type     | default value | description                                    |
|---------------|----------|---------------|------------------------------------------------|
| view          | roSGnode | n/a           | The aggregate view that the view was added to. |

<br/>

### `onRemovedFromAggregateView`
This method is called when the view is removed from an aggregate view.

### Arguments
---------

| argument name | type     | default value | description                                        |
|---------------|----------|---------------|----------------------------------------------------|
| view          | roSGnode | n/a           | The aggregate view that the view was removed from. |