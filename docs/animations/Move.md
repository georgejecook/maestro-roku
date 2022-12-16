# Move

Class summary
-------------

The `Move` class represents an animation that moves an object over a given duration.



Methods
-------

## `new`
------------

The `new` method is the constructor for the `Move` class. It takes in four arguments:

*   `target` (required): This argument specifies the object that the animation will be applied to.
*   `duration` (required): This argument specifies the length of the animation in seconds.
*   `fromValue` (required): This argument specifies the starting position of the object. It should be a two-element array containing the x and y position values.
*   `toValue` (required): This argument specifies the ending position of the object. It should be a two-element array containing the x and y position values.
*   `delay` (optional): This argument specifies a delay in seconds before the animation starts. The default value is `0`.

## `createInterpolator` method
The `createInterpolator` method creates an interpolator function to be used for the animation.

### Arguments

None.

<br />

## `isValidValue`
The `isValidValue` method checks if a given value is a valid position value.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `value` | array | n/a | The value to be checked. |

<br />

## `clone`

The `clone` method creates a copy of the `Move` animation.

### Arguments

None.