# Color Class

Class summary
-------------

The `Color` class represents an animation that changes the color of an object over a given duration.



Methods
-------


## `new`
The `new` method is the constructor for the `Color` class. It takes in four arguments:

*   `target` (required): This argument specifies the object that the animation will be applied to.
*   `duration` (required): This argument specifies the length of the animation in seconds.
*   `fromValue` (required): This argument specifies the starting color of the object. It should be an integer representing a color value in the RGB format.
*   `toValue` (required): This argument specifies the ending color of the object. It should be an integer representing a color value in the RGB format.
*   `delay` (optional): This argument specifies a delay in seconds before the animation starts. The default value is `0`.

<br/>

## `createInterpolator`

The `createInterpolator` method creates an interpolator function to be used for the animation.

### Arguments

None.

<br />

## `isValidValue`
The `isValidValue` method checks if a given value is a valid color value.

### Arguments

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| `value` | dynamic | n/a | The value to be checked. |

<br />

## `clone`
The `clone` method creates a copy of the `Color` animation.

### Arguments

None.

