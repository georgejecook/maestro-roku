# Simple Ken Burns

Class summary
-------------

This class represents a simple Ken Burns effect animation, which combines scaling and movement to create a panning and zooming effect.



Methods
-------

## `new`
This is the constructor for the SimpleKenBurns class. It creates a new instance of the SimpleKenBurns animation and sets the initial values for the `target`, `duration`, `scale`, `movement`, and `delay` properties. It also creates three animations (scaling, movement, and parallel) and sets the values for these animations based on the initial values provided.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| target | mc.types.node |  | The node that the animation will be applied to. |
| duration | float |  | The duration of the animation, in seconds. |
| scale | mc.types.array |  | An array containing the scale values for the x and y axes. |
| movement | mc.types.array |  | An array containing the movement values for the x and y axes. |
| delay | float | 0 | The delay before the animation starts, in seconds. |

<br/>

## `clone`
This method creates a new instance of the SimpleKenBurns animation with the same properties as the current instance.

## `setEaseFunction`
This method sets the easing function for the scaling and movement animations.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| easeFunction | dynamic |  | The easing function to be used for the scaling and movement animations. |

<br/>

## `setKeys`
This method is not supported in the SimpleKenBurns animation.

## `setDuration`
This method sets the duration of the scaling and movement animations.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| duration | float |  | The duration of the scaling and movement animations, in seconds. |

<br/>

## `setDelay`
This method sets the delay before the scaling and movement animations start.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| delay | float |  | The delay before the scaling and movement animations start, in seconds. |

<br/>

## `animateTo`
This method is not supported in the SimpleKenBurns animation.

## `animateToWithSpeed`
This method is not supported in the SimpleKenBurns animation.


## `setFromToValue`
This method is not supported in the SimpleKenBurns animation.

## `observeFraction`
This method registers a callback function to be called with the current fraction of the scaling animation at each frame.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| callback | function |  | The callback function to be called with the current fraction of the scaling animation at each frame. |
| scope | dynamic | invalid | The |