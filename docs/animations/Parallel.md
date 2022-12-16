# Parallel Class

Class summary
-------------

The `Parallel` class represents a type of animation that plays multiple animations simultaneously.



Methods
-------

## `new`


The `new` method is the constructor for the `Parallel` class. It takes in three arguments:

*   `target` (required): This argument specifies the object that the animation will be applied to.
*   `animations` (optional): This argument specifies an array of animations to be played in parallel.
*   `repeat` (optional): This argument specifies whether the animation should repeat indefinitely. The default value is `false`.
*   `delay` (optional): This argument specifies a delay in seconds before the animation starts. The default value is `0`.

<br />

## `setAnimateFromCurrentValue`
The `setAnimateFromCurrentValue` method sets the `animateFromCurrentValue` property for all the animations in the `animations` array.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `value` | dynamic | n/a | The value to set for the `animateFromCurrentValue` property of the animations in the `animations` array. |

<br />

## `syncStartKeys`
The `syncStartKeys` method updates the start keys for all the animations in the `animations` array to the current value of the target object.

## `start`
The `start` method starts playing the animation.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `resume` | boolean | `false` | This argument specifies whether the animation should resume from where it left off or start from the beginning. |

<br />

## `clone`
The `clone` method creates a copy of the `Parallel` animation.

### Arguments

None.

<br/>

## `addAnimations`
The `addAnimations` method adds one or more animations to the `animations` array.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `animations` | array | n/a | An array of animations to be added to the `animations` array. |

<br />

## `destroy`
The `destroy` method destroys all the animations in the `animations` array.

### Arguments

None.

<br />

## `observeState`
The `observeState` method registers a callback function to be called when the state of the animation changes.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `callback` | function | n/a | The callback function to be called when the state of the animation changes. |
| `scope` | dynamic | `invalid` | The scope in which the callback function should be called. |

## `unObserveState`
The `unObserveState` method unregisters the callback function registered with the `observeState` method.

### Arguments

None.

<br/>

## `jumpToEnd`
The `jumpToEnd` method immediately jumps to the end of all the animations in the `animations` array.

### Arguments

None.