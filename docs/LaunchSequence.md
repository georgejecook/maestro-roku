# Launch Sequence

## Class summary
This class manages the actions that should be taken when the Roku app starts. It extends the `mc.CommandSequence` class.



## Public Fields

*   `isIncludingView` (boolean): Set this to `false` to exclude certain commands. Default value is `true`.
*   `styleUrl` (string): The location of the styles file. The default value is `"pkg:" + "/meta/Styles.json"`.
*   `maestroStyleUrl` (string): The location of the Maestro styles file. The default value is `"pkg:/meta/maestroDefaultStyles.json"`

<br/>

## Methods


## `createCommands`

This method creates the commands that will be executed when the app starts. The commands are stored in a linked list structure, with each command pointing to the next command in the sequence. The commands that are created are:

*   `Init IOC`: Calls the `initializeIOC` method.
*   `Create FontManger`: Calls the `createFontManger` method.
*   `Load Styles`: Calls the `loadStyles` method.
*   `Setup Maestro`: Calls the `setupMaestro` method.
*   `Initialize ComponentPool`: Calls the `initializeComponentPool` method.
*   `Prebake Cells`: Calls the `_prebakeViews` method.
*   Any additional custom steps specified by the `getCustomSteps` method.

<br/>


## `getCustomSteps`
This method provides an override point to add custom steps to the list of commands. It returns an empty array by default.


<br/>

## `setupMaestro`
This method initializes the focus manager and creates a timer node.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `command` | `mc.Command` | N/A | A command object that is passed to the method. |

### Returns

None.

<br/>

## `initializeIOC`
This method creates an IOC container and loads the manifest file. It also creates a `delayedTaskManager` node.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `command` | `mc.Command` | N/A | A command object that is passed to the method. |

### Returns

None.

<br/>


## `failCommand`
This method is called when a command in the sequence fails. It logs an error message and displays an error dialog.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `command` | `mc.Command` | N/A | The command that has failed. |
| `message` | `string` | N/A | The error message to be displayed. |

### Returns

None.

<br/>


## `showErrorDialog`
This method displays an error dialog with a given title and message.

### Arguments

| Argument Name | Type | Default Value | Description |
| ---| ---| ---| --- |
| `title` | `string` | N/A | The title of the error dialog. |
| `message` | `string` | N/A | The message to be displayed in the error dialog. |

### Returns

*   `mc.types.node`: The `Dialog` node that was created.

### Events

*   `buttonSelected`: This event is triggered when a button in the dialog is selected.
*   `wasClosed`: This event is triggered when the dialog is closed.

<br/>


## Private Methods
---------------

*   `initializeComponentPool`: This method creates two nodes, a `componentPool` node and a `cellTracker` node. It also sets these nodes as instance variables and adds them as fields to the `global` object.
*   `createFontManger`: This method creates a `fontManager` object and sets it as an instance variable. It also adds the `fontManager` object as a field to the `global` object.
*   `loadStyles`: This method creates a `styleManager` object and sets it as an instance variable. It also adds the `styleManager` object as a field to the `global` object. It then loads the Maestro default styles and the app's styles from JSON files and adds them to the `styleManager`. It logs the version of the style that is being used.