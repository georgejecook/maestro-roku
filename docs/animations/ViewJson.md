# ViewJson

Class summary
-------------

This class represents an animation that changes the properties of one or more nodes based on a JSON object.


Methods
-------

## `new`
This is the constructor for the ViewJson class. It creates a new instance of the ViewJson animation and sets the initial values for the `fromJson`, `toJson`, `duration`, and `delay` properties.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| fromJson | mc.types.assocarray |  | A JSON object containing the starting values for the animation. |
| toJson | mc.types.assocarray |  | A JSON object containing the ending values for the animation. |
| duration | float |  | The duration of the animation, in seconds. |
| delay | float | 0 | The delay before the animation starts, in seconds. |

<br />

## `start`
This method starts the animation. If the `useCurrentState` argument is `true`, the current values of the nodes will be used as the starting values for the animation. Otherwise, the starting values will be taken from the `fromJson` property.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| resume | boolean | false | If `true`, the animation will resume from the point it was paused. |
| useCurrentState | boolean | false | If `true`, the current values of the nodes will be used as the starting values for the animation. |

<br />

## `animateTo`
This method changes the ending values for the animation and optionally the duration. If the animation is currently playing, it will be paused and then resumed after the new values and duration have been set.

### Arguments

| argument name | type | default value | description |
| ---| ---| ---| --- |
| toValue | dynamic |  | A JSON object containing the new ending values for the animation. |
| duration | float | invalid | The new duration for the animation, in seconds. If not provided, the duration will not be changed. |

<br />

## `animateToWithSpeed`
This method is not supported in the ViewJson animation and will log an error if called.

## `setFromToValue`
This method sets the starting and ending values for the animation.

### Arguments
| argument name | type | default value | description |
| ---| ---| ---| --- |
| fromValue | dynamic |  | A JSON object containing the new starting values for the animation. |
| toValue | dynamic |  | A JSON object containing the new ending values for the animation. |

<br />

## `clone`
This method creates a new instance of the ViewJson animation with the same properties as the current instance.
