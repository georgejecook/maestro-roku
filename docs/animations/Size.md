# Size class

Class summary
-------------

The `Size` class represents an animation that resizes an object over a given duration. The size of the object is changed by animating its width and height separately.


Methods
-------

## `new`
The `new` method is the constructor for the `Size` class. It takes in four arguments:

*   `target` (required): This argument specifies the object that the animation will be applied to.
*   `duration` (required): This argument specifies the length of the animation in seconds.
*   `fromValue` (required): This argument specifies the starting size of the object. It should be a two-element array containing the width and height values.
*   `toValue` (required): This argument specifies the ending size of the object. It should be a two-element array containing the width and height values.
*   `delay` (optional): This argument specifies a delay in seconds before the animation starts. The default value is `0`.

## `clone`
The `clone` method creates a copy of the `Size` animation.

### Arguments

None.

<br />

## `setEaseFunction`
The `setEaseFunction` method sets the easing function to be used for the width and height animations.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `easeFunction` | dynamic | n/a | The easing function to be used. |

<br/>

## `setKeys`
The `setKeys` method sets the keyframes and keyframe values for the width and height animations.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `keys` | array | n/a | An array of keyframe values. |
| `keyValues` | array | n/a | An array of keyframe values. Each element should be a two-element array containing the width and height values for the corresponding keyframe. |

<br />

## `setDuration`
The `setDuration` method sets the duration of the width and height animations.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `duration` | float | n/a | The duration of the animation in seconds. |

<br />

## `isValidValue`

The `isValidValue` method checks if a given value is a valid size value.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `value` | array | n/a | The value to be checked. |

<br />

## `setDelay`
The `setDelay` method sets the delay for the width and height animations.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `delay` | float | n/a | The delay in seconds before the animation starts. |

<br />

## `animateTo`
The `animateTo` method animates the object to a given size.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `toValue` | dynamic | n/a | The size to animate to. It should be a two-element array containing the width and height values. |
| `duration` (optional) | float |  |
<br />

## `animateToWithSpeed`


This method starts the animation and animates the node to the specified size at a specific speed.

### Arguments

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| toValue | dynamic |  | The final size of the node, in the form `[width, height]`. |
| stepSpeed | float |  | The speed at which the animation should progress, in units per second. |
| stepUnit | string | "pixel" | The unit of measure for the step speed. |


## `setFromToValue`
This method sets the starting and ending values for the animation.

### Arguments
| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| fromValue | dynamic |  | The initial size of the node, in the form `[width, height]`. |
| toValue | dynamic |  | The final size of the node, in the form `[width, height]`. |

<br />

## `observeFraction`
This method sets a callback function to be called at every step of the animation. The callback function receives a value between 0 and 1 representing the progress of the animation.

### Arguments
| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| callback | function |  | The callback function to be called at every step of the animation. |
| scope | dynamic | invalid | The scope in which the callback function should be called. |

<br />

## `unobserveFraction`
This method removes the previously set callback function for observing the progress of the animation.

### Arguments
None.