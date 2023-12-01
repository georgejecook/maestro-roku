# Abstract Animation

Class summary
-------------



The AbstractAnimation class is a base class for creating animations in the Roku platform. It provides a number of methods for controlling the animation, including starting, pausing, and stopping the animation, setting the repeat behavior of the animation, and destroying the animation. It also provides methods for setting and getting the animation's duration and delay, as well as methods for modifying the animation's start and end values on the fly. Additionally, the class provides methods for observing and reacting to changes in the animation's progress and state, and for setting custom easing functions and keyframes for the animation. Finally, it includes a number of utility functions for performing common tasks related to animations, such as estimating the time required to complete an animation based on a desired step size and speed.



Properties
----------

*   `target`: This property specifies the object that the animation will be applied to.
*   `interpolator`: This property specifies a function that will be used to interpolate between the key values of the animation. The function should take in a fractional value between 0 and 1 and return the interpolated value.
*   `duration`: This property specifies the length of the animation in seconds.
*   `animateFromCurrentValue`: This property specifies whether the animation should start from the current value of the target object or from the initial value specified by the `keyValues` property.



Methods
-------

## `new`

This method creates a new `AbstractAnimation` object and initializes it with a `target` node, a `field` to animate, a `duration`, a starting value `fromValue`, an ending value `toValue`, and optional `name` and `delay` values. If the `field` is set to "#ga\_random", a unique field name is generated and added to the `target` node. If the `target` node is invalid or does not have an `id`, an error is logged. The `createAnimationNode` method is called to create the node that will be used for the animation. The `delay` value is set using the `setDelay` method.

Arguments
---------

| Argument name | Type     | Default value       | Description                                        |
|---------------|----------|---------------------|----------------------------------------------------|
| target        | roSGnode | N/A                 | The node whose `field` will be animated.           |
| field         | string   | N/A                 | The name of the field to animate.                  |
| duration      | float    | N/A                 | The duration of the animation in seconds.          |
| fromValue     | dynamic  | N/A                 | The starting value for the animation.              |
| toValue       | dynamic  | N/A                 | The ending value for the animation.                |
| name          | string   | "AbstractAnimation" | The name of the animation.                         |
| delay         | float    | 0                   | The delay before the animation begins, in seconds. |



## `setEaseFunction`

This method sets the `easeFunction` property of the `node` associated with the `AbstractAnimation` object, which determines how the animation progresses over time. The value of `easeFunction` can be a string specifying a predefined easing function, or a function that returns a value between 0 and 1 based on the progress of the animation.

Arguments
---------

| Argument name | Type    | Default value | Description                                   |
|---------------|---------|---------------|-----------------------------------------------|
| easeFunction  | dynamic | N/A           | The easing function to use for the animation. |


<br/>

## `setAnimateFromCurrentValue`

This method sets the `animateFromCurrentValue` property of the `AbstractAnimation` object, which determines whether the animation should always take the current value of the `field` being animated as the starting value, regardless of the `fromValue` specified when the object was created.

Arguments
---------

| Argument name | Type    | Default value | Description                                                                                                |
|---------------|---------|---------------|------------------------------------------------------------------------------------------------------------|
| value         | dynamic | N/A           | Determines whether the animation should always start from the current value of the `field` being animated. |



## `setKeys`

This method sets the `key` and `keyValue` properties of the `interpolator` object associated with the `AbstractAnimation` object. The `key` property is set to the specified `keys` array, and the `keyValue` property is set to the specified `keyValues` array. The method checks that both `keys` and `keyValues` are valid arrays, and that they have the same number of elements. It also checks that all values in the `keyValues` array are valid values. If any of these checks fail, the method logs an error.

Arguments
---------

| Argument name | Type    | Default value | Description                                                                           |
|---------------|---------|---------------|---------------------------------------------------------------------------------------|
| keys          | roArray | N/A           | An array of key values representing the position of each key value in the animation.  |
| keyValues     | roArray | N/A           | An array of key values representing the values at each key position in the animation. |


<br />

## `syncStartKeys`

This method sets the first element in the `keyValue` property of the `interpolator` object associated with the `AbstractAnimation` object to the current value of the field being animated on the target node. If the `keyValue` property is not a valid array or is empty, the method does nothing.

Arguments
---------

None.

## `start`

This method starts the animation. If the `fractionValueObserver` object is not `invalid`, it calls the `reset` method on it. If the `animateFromCurrentValue` property is `true`, the method calls the `syncStartKeys` method. It then calls the `start` method of the parent class, passing in the `resume` argument as `false` by default or the value of the `resume` argument if it is specified.

Arguments
---------

| Argument name | Type    | Default value | Description                                                                                                           |
|---------------|---------|---------------|-----------------------------------------------------------------------------------------------------------------------|
| resume        | boolean | `false`       | A boolean value indicating whether the animation should resume from the current position or start from the beginning. |



<br />


## `setDuration`

This method sets the `duration` property of the `AbstractAnimation` object and the `duration` property of the `node` associated with the object, which determines the length of the animation in seconds.

Arguments
---------

| Argument name | Type  | Default value | Description                               |
|---------------|-------|---------------|-------------------------------------------|
| duration      | float | N/A           | The duration of the animation in seconds. |

<br />

## `setDelay`

This method sets the `delay` property of the `AbstractAnimation` object and the `delay` property of the `node` associated with the object, which determines the amount of time to wait before starting the animation, in seconds.

Arguments
---------

| Argument name | Type  | Default value | Description                                        |
|---------------|-------|---------------|----------------------------------------------------|
| delay         | float | N/A           | The delay before the animation begins, in seconds. |

<br />

## `animateTo`

This method modifies the `AbstractAnimation` object to animate the `field` of the `target` node from its current value to the specified `toValue`. If the `node` associated with the object is currently playing, the animation is paused before the values are modified. If a `duration` is specified, it is used as the duration of the animation; otherwise, the default `duration` of the object is used. If the `node` was playing before the modification, the animation is resumed.

Arguments
---------

| Argument name | Type | Default value | Description |
| ---| ---| ---| --- |
| toValue | dynamic | N/A |


<br />

## `animateToWithSpeed`

This method modifies the `AbstractAnimation` object to animate the `field` of the `target` node from its current value to the specified `toValue`, using a specified `stepSpeed` and `stepUnit` to determine the duration of the animation. The `delta` between the current value and `toValue` is calculated, and the number of steps required to reach `toValue` is calculated based on the `stepUnit`. The duration of the animation is then set to `steps * stepSpeed`. If the `node` associated with the object is currently playing, the animation is paused before the values are modified. If the `node` was playing before the modification, the animation is resumed.

Arguments
---------

| Argument name | Type    | Default value | Description                                                                                                                                            |
|---------------|---------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| toValue       | dynamic | N/A           | The final value to animate to.                                                                                                                         |
| stepSpeed     | float   | N/A           | The speed at which the animation should progress, in seconds per step.                                                                                 |
| stepUnit      | string  | "pixel"       | The unit of measure for the number of steps. Can be "pixel" (animation progresses 100 pixels per step) or "float" (animation progresses 0.1 per step). |

<br />

## `setFromToValue`
This method sets the `fromValue` and `toValue` properties of the `AbstractAnimation` object,

and sets the `keyValue` property of the `interpolator` object associated with the `AbstractAnimation` to an array containing `fromValue` and `toValue`. This determines the starting and ending values of the animation. The method checks if both `fromValue` and `toValue` are valid values, and if they are not, it logs an error.

Arguments
---------

| Argument name | Type    | Default value | Description                          |
|---------------|---------|---------------|--------------------------------------|
| fromValue     | dynamic | N/A           | The starting value of the animation. |
| toValue       | dynamic | N/A           | The ending value of the animation.   |

<br />

## `jumpToEnd`
This method stops the animation and sets the `field` of the `target` node to the `toValue` of the `AbstractAnimation` object, effectively jumping the animation to its end point.

<br />

## `observeFraction`
Observes the `fraction` field of the `interpolator` node and calls the `callback` function with the new value whenever it changes.

Arguments
---------

| argument name | type     | defaultValue | description                                                                     |
|---------------|----------|--------------|---------------------------------------------------------------------------------|
| callback      | function |              | The function to be called with the new value when the `fraction` field changes. |
| scope         | dynamic  | invalid      | The object to use as `this` when calling the `callback` function.               |

<br />

## `observeState`
Observes the `state` field of the `node` and calls the `callback` function with the new value whenever it changes.

Arguments
---------

| argument name | type     | defaultValue | description                                                                  |
|---------------|----------|--------------|------------------------------------------------------------------------------|
| callback      | function |              | The function to be called with the new value when the `state` field changes. |
| scope         | dynamic  | invalid      | The object to use as `this` when calling the `callback` function.            |

<br />

## `unobserveFraction`
Stops observing the `fraction` field of the `interpolator` node.

## `unobserveState`

Stops observing the `state` field of the `node`.

## `onFraction`
Calls the `func` function with `scope` as `this` when the `fraction` field of the `interpolator` node becomes greater than or equal to the specified `fraction` value.

Arguments
---------

| argument name | type     | defaultValue | description                                                                                                          |
|---------------|----------|--------------|----------------------------------------------------------------------------------------------------------------------|
| fraction      | float    |              | The value that the `fraction` field should reach or surpass to trigger the `func` function.                          |
| func          | function |              | The function to be called when the `fraction` field becomes greater than or equal to the specified `fraction` value. |
| scope         | dynamic  | invalid      | The object to use as `this` when calling the `func` function.                                                        |