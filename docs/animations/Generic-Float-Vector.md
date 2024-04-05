# FloatValue  and Vector Classes

## FloatValue

This is a class that represents a float value animation. It allows you to animate a float field of a node over a given duration.


Methods
-------

## `new`

This is the constructor method for the `FloatValue` class. It initializes a new instance of the class and sets the target node, field to animate, duration, initial and final values, and delay for the animation.

### Arguments

| argument name | type     | defaultValue | description                                                             |
|---------------|----------|--------------|-------------------------------------------------------------------------|
| target        | roSGnode |              | The node that the animation will be applied to.                         |
| field         | string   |              | The name of the field to animate.                                       |
| duration      | float    |              | The length of time in seconds that the animation will take to complete. |
| fromValue     | float    |              | The initial value for the animation.                                    |
| toValue       | float    |              | The final value for the animation.                                      |
| delay         | float    | 0            | The amount of time in seconds to wait before starting the animation.    |

## `clone`

This method returns a new `FloatValue` instance with the same target, field, duration, initial and final values, and delay as the original.

### Returns

`FloatValue` - A new `FloatValue` instance with the same properties as the original.


<br/><br/>
## VectorValue

This is a class that represents a vector value animation. It allows you to animate a two-dimensional vector field of a node over a given duration.


Methods
-------

## `new`

This is the constructor method for the `VectorValue` class. It initial

#### Arguments

| argument name | type     | defaultValue | description                                                             |
|---------------|----------|--------------|-------------------------------------------------------------------------|
| target        | roSGnode |              | The node that the animation will be applied to.                         |
| field         | string   |              | The name of the field to animate.                                       |
| duration      | float    |              | The length of time in seconds that the animation will take to complete. |
| fromValue     | float    |              | The initial value for the animation.                                    |
| toValue       | float    |              | The final value for the animation.                                      |
| delay         | float    | 0            | The amount of time in seconds to wait before starting the animation.    |

<br />

Generic Class Animation
=======================

Class summary
-------------

This is a class that represents a generic animation. It allows you to run an animation without changing any particular value. It achieves this by adding a float field to the target node.

Methods
-------

## `new`

This is the constructor method for the `Generic` class. It initializes a new instance of the class and sets the target node, duration, and delay for the animation.

### Arguments

| argument name | type     | defaultValue | description                                                             |
|---------------|----------|--------------|-------------------------------------------------------------------------|
| target        | roSGnode |              | The node that the animation will be applied to.                         |
| duration      | float    |              | The length of time in seconds that the animation will take to complete. |
| delay         | float    | 0            | The amount of time in seconds to wait before starting the animation.    |

## `clone`

This method returns a new `Generic` instance with the same target, duration, and delay as the original.

### Returns

`Generic` - A new `Generic` instance with the same properties as the original.