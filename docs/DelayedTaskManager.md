# DelayedTaskManager

Class summary
-------------



The `DelayedTaskManager` class provides a way to schedule tasks to be executed at a later time. It does this by creating a timer node that will fire after a specified delay. When the timer fires, it creates a task node of a specified type and sets the fields provided on the task node. The task node is then added to the scene graph and executed. The `DelayedTaskManager` class also provides a method to cancel any tasks that have not yet been executed.



The `activeTimers` and `delayedTasks` private fields are used to store references to the timer and task nodes that have been created. This allows the `DelayedTaskManager` to cancel tasks if necessary.

The `scheduleDelayedTask` method is used to schedule a new task. It takes in the node type, ID, delay, fields, and result field for the task as arguments. If there is already an active timer or task with the same ID, it will be cancelled before the new task is scheduled.

The `cancelDelayedTaskWithId` method allows you to cancel a task with a given ID. It does this by cancelling any active timer and task nodes with the given ID.


<br/>

## Methods


## `cancelDelayedTaskWithId`

This method cancels a delayed task with the given ID.

### Arguments

| Argument Name | Type     | Default Value | Description                         |
|---------------|----------|---------------|-------------------------------------|
| `id`          | `string` | N/A           | The ID of the task to be cancelled. |

### Returns

None.

<br/>

## `scheduleDelayedTask`

This method schedules a delayed task with the given ID, node type, delay, and fields.

### Arguments

| Argument Name | Type                 | Default Value | Description                                                      |
|---------------|----------------------|---------------|------------------------------------------------------------------|
| `nodeType`    | `string`             | N/A           | The type of the node to be created for the task.                 |
| `id`          | `string`             | N/A           | The ID of the task.                                              |
| `delay`       | `float`              | N/A           | The delay in seconds before the task is executed.                |
| `fields`      | `roAssociativeArray` | N/A           | The fields to be set on the task node.                           |
| `resultField` | `string`             | "output"      | The name of the field in which the task's output will be stored. |

### Returns

None.