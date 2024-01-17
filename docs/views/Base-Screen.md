# Base Screen

Class summary
-------------



`BaseScreen` is a class that serves as the base class for screens in an application. It is a subclass of `BaseView`, which is a class that serves as the base class for views in an application.



`BaseScreen` has a `state` field that is used to track the state of a view, and an `originSelection` field that is used to track the selection object that led to this view being created.

`BaseScreen` has several methods for navigating between screens, such as `push()`, which adds a new screen to the navigation stack, `pop()`, which removes the current screen from the navigation stack, and `dismiss()`, which dismisses the current screen. It also has a method called `cleanup()` that is called when the screen is removed from the navigation stack and is used to reset the state of the screen.

`BaseScreen` also has a `onKeyPressBack()` method that is called when the back key is pressed, and a default implementation of this method dismisses the current screen.

`BaseScreen` has an `initialize()` method that is called when the screen is created and sets the `originSelection` field to the `originSelection` field of the top-level scope.



Methods
-------

`new`
-----

This is the constructor of the `BaseScreen` class, which takes in a `name` argument as a string and calls the parent class's constructor.

### Arguments

| Argument name | Type   | Description                                          |
|---------------|--------|------------------------------------------------------|
| `name`        | string | The name of the `BaseScreen` instance being created. |


<br/>

`initialize`
------------

This method initializes the `BaseScreen` instance by calling the parent class's `initialize()` method and setting the `originSelection` field to the `originSelection` field of the top-level scope.

### Arguments

None.

### Return value

None.

<br/>

`push`
------

This method pushes a view onto the navigation stack, making it the current view. If the view passed as an argument is a string, it will be looked up on the `m` object to find the actual view to push.

### Arguments

| argument name | type     | default value | description                                                     |
|---------------|----------|---------------|-----------------------------------------------------------------|
| view          | roSGnode | n/a           | The view to push onto the navigation stack.                     |
| animated      | boolean  | true          | Whether or not to animate the transition when pushing the view. |

<br/>


`pop`
-----

This method removes the current view from the navigation stack and returns it.

### Arguments

| argument name | type    | default value | description                                                      |
|---------------|---------|---------------|------------------------------------------------------------------|
| animated      | boolean | true          | Whether or not to animate the transition when removing the view. |

<br/>

`resetNavControllerToRoot`
--------------------------

This method resets the navigation stack to only contain the root view.

### Arguments

| argument name | type    | default value | description                                                                   |
|---------------|---------|---------------|-------------------------------------------------------------------------------|
| animated      | boolean | true          | Whether or not to animate the transition when resetting the navigation stack. |



<br/>

`getNavController`
------------------

This method returns the navigation controller that is managing the navigation stack.

<br/>

`resetNavController`
--------------------

This method resets the navigation stack to only contain a specified set of views.

### Arguments

| argument name  | type     | default value | description                                                                                                      |
|----------------|----------|---------------|------------------------------------------------------------------------------------------------------------------|
| newFirstScreen | roSGnode | invalid       | The view to set as the first view in the navigation stack. If not provided, the current first view will be used. |
| endIndex | integer |  |

<br/>

`dismiss`
---------

Dismisses the current view and updates the state of the top level scope.

### Arguments

| Argument | Type      | Default Value | Description                                                 |
|----------|-----------|---------------|-------------------------------------------------------------|
| state    | `string`  |               | The state to set on the top level scope.                    |
| animated | `boolean` | `true`        | Whether to animate the transition when dismissing the view. |

<br />

`replaceNavControllerScreen`
----------------------------

Replaces the current screen in the navigation controller with the target screen.

### Arguments

| Argument     | Type       | Default Value | Description                                                                               |
|--------------|------------|---------------|-------------------------------------------------------------------------------------------|
| targetScreen | `roSGnode` |               | The screen to replace the current screen with in the navigation controller.               |
| animated     | `boolean`  | `false`       | Whether to animate the transition when replacing the screen in the navigation controller. |

<br/>
`onKeyPressBack`
----------------

Handles the back key press by dismissing the current screen.

### Return Value

`true` if the back key press was handled, `false` otherwise.