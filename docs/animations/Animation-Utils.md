# Animations Utils

Mv.animation.utils namespace provides utility functions for creating different animations.


## `colorTo`
This method creates a `mv.animations.Color` object, which animates the `color` property of a `node` from its current value to a specified `toValue` over a given `duration`. The animation can be started immediately by setting `start` to `true` (default), or it can be started at a later time by setting `start` to `false` and calling the `start` method on the returned `anim` object. The animation can also be delayed by a specified `delay` time.

Arguments
---------

| Argument name | Type     | Default value | Description                                                                                                       |
|---------------|----------|---------------|-------------------------------------------------------------------------------------------------------------------|
| target        | roSGnode | N/A           | The node whose `color` property will be animated.                                                                 |
| duration      | float    | N/A           | The duration of the animation in seconds.                                                                         |
| toValue       | integer  | N/A           | The target value for the `color` property.                                                                        |
| start         | boolean  | true          | Determines whether the animation should start immediately. Set to `false` to start the animation at a later time. |
| delay         | float    | 0             | The delay before the animation begins, in seconds.                                                                |

<br />

## `fadeTo`
This method creates a `mv.animations.Fade` object, which animates the `opacity` property of a `node` from its current value to a specified `toValue` over a given `duration`. The animation can be started immediately by setting `start` to `true` (default), or it can be started at a later time by setting `start` to `false` and calling the `start` method on the returned `anim` object. The animation can also be delayed by a specified `delay` time.

Arguments
---------

| Argument name | Type     | Default value | Description                                                                                                       |
|---------------|----------|---------------|-------------------------------------------------------------------------------------------------------------------|
| target        | roSGnode | N/A           | The node whose `opacity` property will be animated.                                                               |
| duration      | float    | N/A           | The duration of the animation in seconds.                                                                         |
| toValue       | float    | N/A           | The target value for the `opacity` property.                                                                      |
| start         | boolean  | true          | Determines whether the animation should start immediately. Set to `false` to start the animation at a later time. |
| delay         | float    | 0             | The delay before the animation begins, in seconds.                                                                |

<br />

## `scaleTo`
This method creates a `mv.animations.Scale` object, which animates the `scale` property of a `node` from its current value to a specified `toValue` over a given `duration`. The animation can be started immediately by setting `start` to `true` (default), or it can be started at a later time by setting `start` to `false` and calling the `start` method on the returned `anim` object. The animation can also be delayed by a specified `delay` time.

Arguments
---------

| Argument name | Type     | Default value | Description                                       |
|---------------|----------|---------------|---------------------------------------------------|
| target        | roSGnode | N/A           | The node whose `scale` property will be animated. |
| duration      | float    | N/A           | The duration of the animation in seconds.         |
| toValue       | float    | N/A           | The target value for the `scale` property.        |
| start         | boolean  | true          | Determines whether the animation                  |

  <br />

## `moveTo`

This method creates a `mv.animations.Move` object, which animates the `translation` property of a `node` from its current value to a specified `toValue` over a given `duration`. The animation can be started immediately by setting `start` to `true` (default), or it can be started at a later time by setting `start` to `false` and calling the `start` method on the returned `anim` object. The animation can also be delayed by a specified `delay` time.

Arguments
---------

| Argument name | Type     | Default value | Description                                                                                                       |
|---------------|----------|---------------|-------------------------------------------------------------------------------------------------------------------|
| target        | roSGnode | N/A           | The node whose `translation` property will be animated.                                                           |
| duration      | float    | N/A           | The duration of the animation in seconds.                                                                         |
| toValue       | float    | N/A           | The target value for the `translation` property.                                                                  |
| start         | boolean  | true          | Determines whether the animation should start immediately. Set to `false` to start the animation at a later time. |
| delay         | float    | 0             | The delay before the animation begins, in seconds.                                                                |

<br />

## `animateToJsonViewState`
This method creates a `mv.animations.ViewJson` object, which animates the `translation`, `scale`, and `opacity` properties of a `node` from their current values to specified `toValue`s over a given `duration`. The `toValue` parameter is an associative array with keys `translation`, `scale`, and `opacity`. The animation can be started immediately by setting `start` to `true` (default), or it can be started at a later time by setting `start` to `false` and calling the `start` method on the returned `anim` object. The animation can also be delayed by a specified `delay` time.

Arguments
---------

| Argument name | Type               | Default value | Description                                                                                                              |
|---------------|--------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| target        | roSGnode           | N/A           | The node whose `translation`, `scale`, and `opacity` properties will be animated.                                        |
| duration      | float              | N/A           | The duration of the animation in seconds.                                                                                |
| toValue       | roAssociativeArray | N/A           | An associative array with keys `translation`, `scale`, and `opacity`, specifying the target values for these properties. |
| start         | boolean            | true          | Determines whether the animation should start immediately. Set to `false` to start the animation at a later time.        |
| delay         | float              | 0             | The delay before the animation begins, in seconds.                                                                       |

<br />

## `getDelta`
This method calculates the difference between two values. If the input values are both points (arrays of two numbers), the difference is calculated as the absolute difference between the sum of the coordinates of the two points. If the input values are both numbers, the difference is calculated as the absolute difference between the two numbers. If the input values are neither points nor numbers, the function returns 0.

Arguments
---------

| Argument name | Type    | Default value | Description         |
|---------------|---------|---------------|---------------------|
| fromValue     | dynamic | N/A           | The starting value. |
| toValue       | dynamic | N/A           | The ending value.   |

<br />

## `interpolate`
This method calculates an intermediate value between two input values, based on a fractional value `fraction`. The type of the input values determines the type of the output value:

*   If the input values are strings, the output value is a string that is the interpolation of the input strings based on `fraction`.
*   If the input values are numbers, the output value is a number that is the interpolation of the input numbers based on `fraction`.
*   If the input values are points (arrays of two numbers), the output value is a point that is the interpolation of the input points based on `fraction`.
*   If the input values are associative arrays (AAs) that are compatible with the `mc.setView` function, the output value is an AA that is the interpolation of the input AAs based on `fraction`.
*   If the input values are rectangles (arrays of four numbers), the output value is a rectangle that is the interpolation of the input rectangles based on `fraction`.

Arguments
---------

| Argument name | Type    | Default value | Description                                                                                                                                                                                          |
|---------------|---------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| a             | dynamic | N/A           | The starting value.                                                                                                                                                                                  |
| b             | dynamic | N/A           | The ending value.                                                                                                                                                                                    |
| fraction      | float   | N/A           | A value between 0 and 1 that specifies the intermediate value to be calculated. A value of 0 returns `a`, a value of 1 returns `b`, and a value between 0 and 1 returns a value between `a` and `b`. |