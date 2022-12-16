# Sequence

Class summary
--------------

This class represents a sequence of animations that are played one after the other.



Mehods
------

## `new`
This is the constructor for the Sequence class. It creates a new instance of the Sequence animation and sets the initial values for the `target`, `animations`, `repeat`, and `delay` properties.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| target | mc.types.node |  | The node that the animation will be applied to. |
| animations | mc.types.array | invalid | An array of animations that will be played in sequence. |
| repeat | boolean | false | If `true`, the sequence will repeat indefinitely. |
| delay | float | 0 | The delay before the animation starts, in seconds. |

<br/>

## `setAnimateFromCurrentValue`
This method sets the `animateFromCurrentValue` property, which determines whether the animation will always start from the current value of the node, regardless of the starting value specified in the animation. This method also sets the `animateFromCurrentValue` property of all the animations in the `animations` array.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| value | dynamic |  | The value to set for the `animateFromCurrentValue` property. |

<br/>

## `syncStartKeys`
This method updates the starting values of all the animations in the `animations` array to the current values of the nodes.

## `start`
This method starts the animation. If the `animateFromCurrentValue` property is `true`, the starting values of all the animations in the `animations` array will be updated to the current values of the nodes before the animation starts.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| resume | boolean | false | If `true`, the animation will resume from the point it was paused. |

<br/>

## `clone`
This method creates a new instance of the Sequence animation with the same properties as the current instance.

## `setDelay`
This method sets the delay before the first animation in the `animations` array starts.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| delay | float |  | The delay before the first animation starts, in seconds. |

<br/>

## `addAnimations`
This method adds an array of animations to the `animations` array.

### Arguments
| argument name | type | default value | description |
| ---| ---| ---| --- |
| animations | mc.types.array |  | An array of animations to be added to the `animations` array. |

</br>

## `destroy`
This method destroys all the animations in the `animations` array.

## `observeState`
This method registers a callback function to be called whenever the state of the sequence changes.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| callback | function |  | The callback function to be called when the state of the sequence changes. |
| scope | dynamic | invalid | The scope in which the callback function will be executed. |

<br/>

## `unObserveState`
This method unregisters the callback function registered with the `observeState` method.

## `jumpToEnd`
This method jumps to the end of all the animations in the `animations` array.