# KenBurns

Class summary
-------------

This class creates an animation that simulates a "ken burns" effect, where a node is scaled and panned over a duration of time.



Methods
-------

## `new`
-----

This is the constructor method for the `KenBurns` class. It initializes a new instance of the class and sets the target node, duration, maximum scale, and delay for the animation.

Arguments
---------

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| target | mc.types.node |  | The node that the animation will be applied to. |
| duration | float |  | The length of time in seconds that the animation will take to complete. |
| maxScale | float |  | The maximum amount of scaling that should be applied to the node during the animation. |
| delay | float | 0 | The amount of time in seconds to wait before starting the animation. |

In this constructor method, the `scaleTo` and `moveTo` utility functions are called to create `Scale` and `Move` animation instances, respectively. These animations are added to a `Parallel` animation, which allows them to be run simultaneously. The `node` property of the `Parallel` animation is then set as the `node` property for the `KenBurns` instance.





## `clone`
This method creates a new instance of the `KenBurns` class with the same properties as the original instance.

Arguments
---------
None.
<br />


## `setEaseFunction`
This method sets the easing function for the animation. The easing function determines the rate at which the animation progresses over time.

Arguments
---------

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| easeFunction | dynamic |  | The easing function to use for the animation. |

<br/>

## `setDuration`
This method sets the duration of the animation.

Arguments
---------

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| duration | float |  | The new duration of the animation, in seconds. |

<br/>

## `setDelay`
This method sets the delay for the animation.

Arguments
---------

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| delay | float |  | The amount of time in seconds to wait before starting the animation. |

<br/>

## `animateTo`
This method starts the animation and animates the node to the specified size and position.

Arguments
---------

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| toValue | dynamic |  | The final size and position of the node, in the form `[scale, translation]`. |
| duration | float | invalid | The length of time in seconds that the animation should take to complete. If not provided, the existing duration of the animation will be used. |

<br/>

## `animateToWithSpeed`
This method starts the animation and animates the node to the specified size and position at a specific speed.

Arguments
---------

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| toValue | dynamic |  | The final size and position of the node, in the form `[scale, translation]`. |
| stepSpeed | float |  | The speed at which the animation should progress, in units per second. |
| stepUnit | string | "pixel" | The unit of measure for the step speed. |

<br/>

## `observeFraction`
This method sets a callback function to be called at every step of the animation. The callback function receives a value between 0 and 1 representing the progress of the animation.

Arguments
---------

| argument name | type | defaultValue | description |
| ---| ---| ---| --- |
| callback | function |  | The callback function to be called at every step of the animation. |
| scope | dynamic | invalid | The scope in which the callback function should be called. |

<br/>

## `unObserveFraction`
This method removes the previously set callback function for observing the progress of the animation.

<br/>

## `start`
The `start`method is called when the `KenBurns` animation is started. It is responsible for setting the initial and final scale and position values for the `Scale` and `Move` animations that make up the `KenBurns` animation.

The `start` method begins by calling the `start` method of the parent `AbstractAnimation` class using `super.start()`. This ensures that any setup that needs to be done by the parent class is handled before the `KenBurns` animation begins.

Next, the method generates random values for the initial and final scales of the animation. The `endScale` value is chosen from a range between 1.1 and the maximum scale provided in the constructor, and the `startScale` value is chosen from the same range. These values are then used to create `fromScale` and `toScale` arrays, which are passed to the `setFromToValue` method of the `Scale` animation instance to set the initial and final scale values for the animation.

The method then determines the dimensions of the target node, and calculates the amount of translation needed to move the node to the four corners of the screen. It then chooses a random starting and ending corner, and calculates the initial and final translation values based on these corners and the node dimensions. These values are then passed to the `setFromToValue` method of the \`Move